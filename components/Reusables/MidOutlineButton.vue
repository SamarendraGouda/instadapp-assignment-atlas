<template>
  <button class="button-group-button">
    <img v-if="icon" :src="icon" alt="" />
    {{ label }}
  </button>
</template>

<script reactive lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.button-group-button {
  background: transparent;
  width: inherit;
  border: 1px solid #3d4e71;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
}

.button-group-button img {
  background: transparent !important;
  height: 24px;
  width: 24px;
}
</style>
