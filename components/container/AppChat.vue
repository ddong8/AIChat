<template>
  <div
    class="flex flex-col overflow-hidden bg-primary-background h-full rounded-[20px] bg-white"
  >
    <div
      class="border-b border-solid border-primary-border flex flex-row items-center justify-between gap-2 py-3 mx-5"
    >
      <div class="flex flex-row items-center gap-2">
        <img
          src="~/assets/chatgpt-logo.svg"
          class="w-5 h-5 object-contain rounded-full"
        /><span class="font-semibold text-primary-text text-sm">ChatGPT</span>
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
            <img src="~/assets/icons/dropdown.svg" class="w-5 h-5" />
          </button>
        </div>
      </div>
      <div class="flex flex-row items-center gap-3">
        <img
          src="~/assets/icons/share.svg"
          class="w-5 h-5 cursor-pointer"
        /><img
          src="~/assets/icons/clear.svg"
          class="w-5 h-5 cursor-pointer"
        /><img
          src="~/assets/icons/history.svg"
          class="w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
    <div class="react-scroll-to-bottom--css-kvmra-79elbk overflow-auto h-full">
      <div class="react-scroll-to-bottom--css-kvmra-1n7m0yu">
        <div class="flex flex-col gap-3 h-full mx-5"></div>
      </div>
    </div>
    <div class="mt-3 flex flex-col mx-5 mb-[10px]">
      <div class="flex flex-row items-center gap-[5px] mb-0">
        <span class="font-medium text-xs text-light-text">Send to ChatGPT</span>
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
</template>
