<template>
  <div class="activity-status-for">
    <img :src="forIcon" alt="" />
    <div class="status-text">For</div>
  </div>
</template>

<script setup>
import forIcon from "~/assets/icons/for.svg";
</script>

<style scoped>
.activity-status-for img {
  background: transparent;
  width: 24px;
  height: 24px;
}

.activity-status-for {
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 112px;
  font-size: 14px;
  color: #36cd72;
  background: #32C34A1A;
  padding: 8px 20px;
  border-radius: 4px;
}

.status-text {
  background: transparent;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
</style>
