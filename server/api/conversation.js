import Keyv from "keyv";
import { prisma } from "../../prisma/db";
import BingAIClient from "~/server/client/BingAIClient";
// import ChatGPTClient from '~/src/ChatGPTClient';
// import ChatGPTBrowserClient from '~/src/ChatGPTBrowserClient';

const clientToUse = "bing";
const perMessageClientOptionsWhitelist = {
  // The ability to switch clients using `clientOptions.clientToUse` will be disabled if `validClientsToUse` is not set.
  // To allow switching clients per message, you must set `validClientsToUse` to a non-empty array.
  validClientsToUse: ["bing", "chatgpt", "chatgpt-browser"], // values from possible `clientToUse` options above
  // The Object key, e.g. "chatgpt", is a value from `validClientsToUse`.
  // If not set, ALL options will be ALLOWED to be changed. For example, `bing` is not defined in `perMessageClientOptionsWhitelist` above,
  // so all options for `bingAiClient` will be allowed to be changed.
  // If set, ONLY the options listed here will be allowed to be changed.
  // In this example, each array element is a string representing a property in `chatGptClient` above.
  chatgpt: [
    "promptPrefix",
    "userLabel",
    "chatGptLabel",
    // Setting `modelOptions.temperature` here will allow changing ONLY the temperature.
    // Other options like `modelOptions.model` will not be allowed to be changed.
    // If you want to allow changing all `modelOptions`, define `modelOptions` here instead of `modelOptions.temperature`.
    "modelOptions.temperature",
  ],
};

const cacheOptions = {};

cacheOptions.store = new Keyv(process.env.REDIS_URL, {
  disable_resubscribing: true,
});

const bingAiClient = {
  // Necessary for some people in different countries, e.g. China (https://cn.bing.com)
  host: process.env.BINGHOST,
  // The "_U" cookie value from bing.com
  userToken: "",
  // If the above doesn't work, provide all your cookies as a string instead
  cookies: process.env.COOKIES,
  // A proxy string like "http://<ip>:<port>"
  proxy: process.env.PROXY,
  // (Optional) Set to true to enable `console.debug()` logging
  debug: false,
};

export default defineEventHandler(async (event) => {
  const createTime = getTimeStr();
  const { req, res } = event.node;
  const body = (await readBody(event)) || {};
  const ip = req.headers["cf-connecting-ip"] || "";
  const abortController = new AbortController();

  req.on("close", () => {
    if (abortController.signal.aborted === false) {
      abortController.abort();
    }
  });

  let onProgress;
  if (body.stream === true) {
    onProgress = (token) => {
      if (token !== "[DONE]") {
        res.write(`id: ''\ndata: ${JSON.stringify(token)}\n\n`);
      }
    };
  } else {
    onProgress = null;
  }

  let result;
  let error;
  try {
    if (!body.message) {
      const invalidError = new Error();
      invalidError.data = {
        code: 400,
        message: "The message parameter is required.",
      };
      throw invalidError;
    }

    let clientToUseForMessage = clientToUse;
    const clientOptions = filterClientOptions(
      body.clientOptions,
      clientToUseForMessage
    );
    if (clientOptions && clientOptions.clientToUse) {
      clientToUseForMessage = clientOptions.clientToUse;
      delete clientOptions.clientToUse;
    }

    let { shouldGenerateTitle } = body;
    if (typeof shouldGenerateTitle !== "boolean") {
      shouldGenerateTitle = false;
    }

    const messageClient = getClient(clientToUseForMessage);

    result = await messageClient.sendMessage(body.message, {
      jailbreakConversationId: body.jailbreakConversationId,
      conversationId: body.conversationId
        ? body.conversationId.toString()
        : undefined,
      parentMessageId: body.parentMessageId
        ? body.parentMessageId.toString()
        : undefined,
      conversationSignature: body.conversationSignature,
      clientId: body.clientId,
      invocationId: body.invocationId,
      shouldGenerateTitle, // only used for ChatGPTClient
      toneStyle: body.toneStyle,
      clientOptions,
      onProgress,
      abortController,
    });
  } catch (e) {
    error = e;
  }

  if (result !== undefined) {
    if (body.stream === true) {
      res.write(`event: result\nid: ''\ndata: ${JSON.stringify(result)}\n\n`);
      res.write(`id: ''\ndata: [DONE]\n\n`);
      res.end();
      prisma.conversation
        .create({
          data: {
            ip: ip,
            msg: body.message,
            reqData: body,
            respJson: result,
            reqHeader: req.headers,
            createTime: createTime,
            endTime: getTimeStr(),
            isCompleted: true,
          },
        })
        .catch((error) => {
          console.error(error);
        });
      return;
    }
    prisma.conversation
      .create({
        data: {
          ip: ip,
          msg: body.message,
          reqData: body,
          respJson: result,
          reqHeader: req.headers,
          createTime: createTime,
          endTime: getTimeStr(),
          isCompleted: true,
        },
      })
      .catch((error) => {
        console.error(error);
      });
    return res.json(result);
  }

  const code =
    error?.data?.code || (error.name === "UnauthorizedRequest" ? 401 : 503);
  if (code === 503) {
    console.error(error);
  }
  const message =
    error?.data?.message ||
    error?.message ||
    `There was an error communicating with ${
      clientToUse === "bing" ? "Bing" : "ChatGPT"
    }.`;
  if (body.stream === true) {
    res.write(
      `id: ''\nevent: error\ndata: ${JSON.stringify({
        code: code,
        error: message,
      })}\n\n`
    );
    res.end();
    prisma.conversation
      .create({
        data: {
          ip: ip,
          msg: body.message,
          reqData: body,
          respJson: {
            code: code,
            error: message,
          },
          reqHeader: req.headers,
          createTime: createTime,
          endTime: getTimeStr(),
          isCompleted: false,
        },
      })
      .catch((error) => {
        console.error(error);
      });
    return;
  }
  prisma.conversation
    .create({
      data: {
        ip: ip,
        msg: body.message,
        reqData: body,
        respJson: {
          code: code,
          error: message,
        },
        reqHeader: req.headers,
        createTime: createTime,
        endTime: getTimeStr(),
        isCompleted: false,
      },
    })
    .catch((error) => {
      console.error(error);
    });
  return res.json({
    code: code,
    error: message,
  });
});

function getTimeStr() {
  return new Date()
    .toLocaleString("en-US", { hour12: false })
    .replace(/,/g, " ");
}

function getClient(clientToUseForMessage) {
  switch (clientToUseForMessage) {
    case "bing":
      return new BingAIClient({ ...bingAiClient, cache: cacheOptions });
    case "chatgpt-browser":
      return new ChatGPTBrowserClient(
        settings.chatGptBrowserClient,
        settings.cacheOptions
      );
    case "chatgpt":
      return new ChatGPTClient(
        settings.openaiApiKey || settings.chatGptClient.openaiApiKey,
        settings.chatGptClient,
        settings.cacheOptions
      );
    default:
      throw new Error(`Invalid clientToUse: ${clientToUseForMessage}`);
  }
}

/**
 * Filter objects to only include whitelisted properties set in
 * `settings.js` > `apiOptions.perMessageClientOptionsWhitelist`.
 * Returns original object if no whitelist is set.
 * @param {*} inputOptions
 * @param clientToUseForMessage
 */
function filterClientOptions(inputOptions, clientToUseForMessage) {
  if (!inputOptions || !perMessageClientOptionsWhitelist) {
    return null;
  }

  // If inputOptions.clientToUse is set and is in the whitelist, use it instead of the default
  if (
    perMessageClientOptionsWhitelist.validClientsToUse &&
    inputOptions.clientToUse &&
    perMessageClientOptionsWhitelist.validClientsToUse.includes(
      inputOptions.clientToUse
    )
  ) {
    clientToUseForMessage = inputOptions.clientToUse;
  } else {
    inputOptions.clientToUse = clientToUseForMessage;
  }

  const whitelist = perMessageClientOptionsWhitelist[clientToUseForMessage];
  if (!whitelist) {
    // No whitelist, return all options
    return inputOptions;
  }

  const outputOptions = {
    clientToUse: clientToUseForMessage,
  };

  for (const property of Object.keys(inputOptions)) {
    const allowed = whitelist.includes(property);

    if (!allowed && typeof inputOptions[property] === "object") {
      // Check for nested properties
      for (const nestedProp of Object.keys(inputOptions[property])) {
        const nestedAllowed = whitelist.includes(`${property}.${nestedProp}`);
        if (nestedAllowed) {
          outputOptions[property] = outputOptions[property] || {};
          outputOptions[property][nestedProp] =
            inputOptions[property][nestedProp];
        }
      }
      continue;
    }

    // Copy allowed properties to outputOptions
    if (allowed) {
      outputOptions[property] = inputOptions[property];
    }
  }

  return outputOptions;
}
