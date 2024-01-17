<template>
  <div class="empty-container">
    <div class="empty-image">
      <img :src="empty" alt="" />
    </div>
    <div class="empty-text">There are no active proposals at this time.</div>
  </div>
</template>

<script setup>
import empty from "~/assets/icons/empty.svg";
</script>

<style scoped>
.empty-container {
  width: 100%;
  background: #1b2a49;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  color: #fff;
  padding: 80px 0;
  border-radius: 8px;
}
</style>
