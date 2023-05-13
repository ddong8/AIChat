<template>
  <aside
    class="flex flex-col bg-primary-background bg-opacity-40 w-[230px] px-4 bg-[#afa6dd]"
  >
    <img
      src="../assets/icons/collapse.svg"
      class="w-6 h-6 cursor-pointer my-5 self-end"
    /><img src="../assets/logo.svg" class="w-[79px]" />
    <div class="flex flex-col gap-3 mt-12">
      <a
        class="rounded-[10px] w-full h-[45px] pl-3 flex flex-row gap-3 items-center bg-white text-primary-text dark:bg-primary-blue"
        title="All-In-One"
        href="#/"
        data-status="active"
        ><img src="../assets/all-in-one.svg" class="w-5 h-5" /><span
          class="font-medium text-sm"
          >All-In-One</span
        ></a
      ><a
        class="rounded-[10px] w-full h-[45px] pl-3 flex flex-row gap-3 items-center bg-gray-100 bg-opacity-20 text-white opacity-90 hover:opacity-100"
        title="ChatGPT"
        href="#/chat/chatgpt"
        ><img src="../assets/chatgpt-logo.svg" class="w-5 h-5" /><span
          class="font-medium text-sm"
          >ChatGPT</span
        ></a
      ><a
        class="rounded-[10px] w-full h-[45px] pl-3 flex flex-row gap-3 items-center bg-gray-100 bg-opacity-20 text-white opacity-90 hover:opacity-100"
        title="Bing"
        href="#/chat/bing"
        ><img src="../assets/bing-logo.svg" class="w-5 h-5" /><span
          class="font-medium text-sm"
          >Bing</span
        ></a
      ><a
        class="rounded-[10px] w-full h-[45px] pl-3 flex flex-row gap-3 items-center bg-gray-100 bg-opacity-20 text-white opacity-90 hover:opacity-100"
        title="Bard"
        href="#/chat/bard"
        ><img src="../assets/bard-logo.svg" class="w-5 h-5" /><span
          class="font-medium text-sm"
          >Bard</span
        ></a
      >
    </div>
    <div class="mt-auto">
      <hr class="border-[#ffffff4d]" />
      <div class="my-5">
        <a href="#/premium"
          ><div
            class="flex flex-row items-center gap-[10px] rounded-[10px] px-4 py-2 cursor-pointer"
            style="
              background: linear-gradient(
                275deg,
                rgb(var(--color-primary-purple)) 1.65%,
                rgb(var(--color-primary-blue)) 100%
              );
            "
          >
            <img src="../assets/icons/premium.svg" class="w-8 h-8" /><span
              class="text-white font-semibold text-base"
              >Premium</span
            >
          </div></a
        >
      </div>
      <div class="flex mt-5 gap-[10px] mb-4 flex-row">
        <a
          href="https://github.com/wong2/chathub/issues"
          target="_blank"
          rel="noreferrer"
          title="Feedback"
          ><div
            class="p-[6px] rounded-[10px] w-fit cursor-pointer hover:opacity-80 bg-secondary dark:bg-transparent bg-opacity-20"
          >
            <img src="../assets/icons/feedback.svg" class="w-6 h-6" /></div></a
        ><a href="#/setting"
          ><div
            class="p-[6px] rounded-[10px] w-fit cursor-pointer hover:opacity-80 bg-secondary dark:bg-transparent bg-opacity-20"
          >
            <img src="../assets/icons/setting.svg" class="w-6 h-6" /></div
        ></a>
      </div>
    </div>
    <div
      style="
        position: fixed;
        top: 1px;
        left: 1px;
        width: 1px;
        height: 0px;
        padding: 0px;
        margin: -1px;
        overflow: hidden;
        clip: rect(0px, 0px, 0px, 0px);
        white-space: nowrap;
        border-width: 0px;
        display: none;
      "
    ></div>
  </aside>
</template>
