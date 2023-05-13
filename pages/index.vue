<template>
  <main class="h-screen grid grid-cols-[auto_1fr] bg-[#6756bd]">
    <AppAside></AppAside>
    <div class="p-[15px] h-full overflow-hidden">
      <div class="flex flex-col overflow-hidden h-full">
        <div
          class="grid overflow-hidden grow auto-rows-fr gap-3 mb-3 grid-cols-2"
        >
          <div
            class="flex flex-col overflow-hidden bg-primary-background h-full rounded-[20px] bg-white"
          >
            <div
              class="border-b border-solid border-primary-border flex flex-row items-center justify-between gap-2 py-3 mx-5"
            >
              <div class="flex flex-row items-center gap-2">
                <img
                  src="../assets/chatgpt-logo.svg"
                  class="w-5 h-5 object-contain rounded-full"
                /><span class="font-semibold text-primary-text text-sm"
                  >ChatGPT</span
                >
                <div
                  class="relative inline-block text-left h-5"
                  data-headlessui-state=""
                >
                  <button
                    id="headlessui-menu-button-:r4:"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <img src="../assets/icons/dropdown.svg" class="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div class="flex flex-row items-center gap-3">
                <img
                  src="../assets/icons/share.svg"
                  class="w-5 h-5 cursor-pointer"
                /><img
                  src="../assets/icons/clear.svg"
                  class="w-5 h-5 cursor-pointer"
                /><img
                  src="../assets/icons/history.svg"
                  class="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>
            <div
              class="react-scroll-to-bottom--css-kvmra-79elbk overflow-auto h-full"
            >
              <div class="react-scroll-to-bottom--css-kvmra-1n7m0yu">
                <div class="flex flex-col gap-3 h-full mx-5"></div>
              </div>
            </div>
            <div class="mt-3 flex flex-col mx-5 mb-[10px]">
              <div class="flex flex-row items-center gap-[5px] mb-0">
                <span class="font-medium text-xs text-light-text"
                  >Send to ChatGPT</span
                >
                <hr class="grow border-primary-border" />
              </div>
              <form class="flex flex-row items-center gap-3">
                <textarea
                  class="resize-none overflow-x-hidden overflow-y-auto w-full outline-none text-sm text-primary-text bg-transparent scrollbar-thin"
                  autocomplete="off"
                  name="input"
                  placeholder=""
                  style="height: 20px !important"
                ></textarea
                ><button
                  type="button"
                  class="rounded-[30px] text-sm px-4 py-1 text-primary-text bg-secondary invisible"
                >
                  <div class="flex flex-row items-center gap-1 min-w-max">
                    <span>-</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div
            class="flex flex-col overflow-hidden bg-primary-background h-full rounded-[20px] bg-white"
          >
            <div
              class="border-b border-solid border-primary-border flex flex-row items-center justify-between gap-2 py-3 mx-5"
            >
              <div class="flex flex-row items-center gap-2">
                <img
                  src="../assets/bing-logo.svg"
                  class="w-5 h-5 object-contain rounded-full"
                /><span class="font-semibold text-primary-text text-sm"
                  >Bing</span
                >
                <div
                  class="relative inline-block text-left h-5"
                  data-headlessui-state=""
                >
                  <button
                    id="headlessui-menu-button-:r5:"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <img src="../assets/icons/dropdown.svg" class="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div class="flex flex-row items-center gap-3">
                <img
                  src="../assets/icons/share.svg"
                  class="w-5 h-5 cursor-pointer"
                /><img
                  src="../assets/icons/clear.svg"
                  class="w-5 h-5 cursor-pointer"
                /><img
                  src="../assets/icons/history.svg"
                  class="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>
            <div
              class="react-scroll-to-bottom--css-kvmra-79elbk overflow-auto h-full"
            >
              <div class="react-scroll-to-bottom--css-kvmra-1n7m0yu">
                <div class="flex flex-col gap-3 h-full mx-5"></div>
              </div>
            </div>
            <div class="mt-3 flex flex-col mx-5 mb-[10px]">
              <div class="flex flex-row items-center gap-[5px] mb-0">
                <span class="font-medium text-xs text-light-text"
                  >Send to Bing</span
                >
                <hr class="grow border-primary-border" />
              </div>
              <form class="flex flex-row items-center gap-3">
                <textarea
                  class="resize-none overflow-x-hidden overflow-y-auto w-full outline-none text-sm text-primary-text bg-transparent scrollbar-thin"
                  autocomplete="off"
                  name="input"
                  placeholder=""
                  style="height: 20px !important"
                ></textarea
                ><button
                  type="button"
                  class="rounded-[30px] text-sm px-4 py-1 text-primary-text bg-secondary invisible"
                >
                  <div class="flex flex-row items-center gap-1 min-w-max">
                    <span>-</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
        <form
          class="flex flex-row items-center gap-3 rounded-[20px] bg-primary-background px-5 py-[10px] bg-white"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            color="#707070"
            class="cursor-pointer"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(112, 112, 112)"
          >
            <path
              fill-rule="evenodd"
              d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
            ></path></svg
          ><textarea
            class="resize-none overflow-x-hidden overflow-y-auto w-full outline-none text-sm text-primary-text bg-transparent scrollbar-thin"
            autocomplete="off"
            name="input"
            placeholder="Send to all ..."
            style="height: 20px !important"
          ></textarea
          ><button
            type="submit"
            class="rounded-[60px] text-base font-medium px-8 py-2 text-white bg-primary-blue bg-blue-500"
          >
            <div class="flex flex-row items-center gap-1 min-w-max">
              <span>发送</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
