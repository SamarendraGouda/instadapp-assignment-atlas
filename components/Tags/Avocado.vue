<template>
  <div>
    <div class="tag avocado">
      <img :src="avocado" alt="" />
      Avocado
    </div>
  </div>
</template>

<script setup lang="ts">
import avocado from "~/assets/icons/Avocado.svg";
</script>

<style scoped>
.tag {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 2px;
  background: #233455;
}

.avocado {
  color: #36cd72;
  font-size: 14px;
  font-weight: 600;
  background: #32c34a1a !important;
}

.tag > img {
  background: transparent !important;
  height: 24px;
  width: 24px;
}
</style>
