<template>
  <div class="two-column-layout">
      <div class="left-column">
        <slot name="left"></slot>
      </div>
      <div class="right-column">
        <slot name="right"></slot>
      </div>
  </div>
</template>

<style>
.two-column-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

.left-column,
.right-column {
  flex: 1;
  margin: 0 10px;
  border: 1px solid #ddd;
  padding: 10px;
  position: relative;
}

.left-column::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
  width: 1px;
  background-color: #ddd;
}
</style>
