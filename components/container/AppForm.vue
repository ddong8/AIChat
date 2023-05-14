<template>
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
</template>
