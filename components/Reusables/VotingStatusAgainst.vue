<template>
  <div class="activity-status-against">
    <img :src="againstIcon" alt="" />
    <div class="status-text">Against</div>
  </div>
</template>

<script setup>
import againstIcon from "~/assets/icons/against.svg";
</script>

<style scoped>
.activity-status-against img {
  background: transparent;
  width: 24px;
  height: 24px;
}

.activity-status-against {
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 112px;
  font-size: 14px;
  color: #ec6263;
  background: #ec62631a;
  padding: 8px 20px;
  border-radius: 4px;
}

.status-text {
  background: transparent;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
}
</style>
