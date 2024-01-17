<template>
  <div class="code">
    <div class="sl">1</div>
    <div class="code-text">0x9522229...CC4BAfe5</div>
  </div>
</template>

<script setup></script>

<style scoped>
.code {
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  background: #1a2948;
  padding: 8px;
  border-radius: 6px;
}

.sl {
  color: #5c688c;
  padding: 4px 8px;
  border-radius: 4px;
}

.code-text {
  background: transparent;
  color: #fff;
}
</style>
