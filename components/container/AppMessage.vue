<template>
  <div class="grid overflow-hidden grow auto-rows-fr gap-3 mb-3 grid-cols-2">
    <ContainerAppChat v-for="item in presets.selectedChat"></ContainerAppChat>
  </div>
</template>
<script setup lang="ts">
const presets = usePresets();
const chatObjs = presets.selectedChat;
console.log(presets.selectedChat);
</script>
