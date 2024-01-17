<template>
  <div class="pagination-container">
    <div class="page-data">
      <div class="page-data-text">Lines per page</div>
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton
          color="white"
          label="20"
          trailing-icon="i-heroicons-chevron-down-20-solid"
          :ui="{
            strategy: 'override',
            base: 'dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
          }"
        />
      </UDropdown>
    </div>

    <div class="page-buttons">
      <div class="page-number">Page 1 0f 10</div>
      <div class="page-buttons-container">
        <UButton color="white" :ui="buttonStyling">
          <img :src="first" alt="" />
        </UButton>
        <UButton color="white" :ui="buttonStyling">
          <img :src="prev" alt="" />
        </UButton>
        <UButton color="white" :ui="buttonStyling">
          <img :src="next" alt="" />
        </UButton>
        <UButton color="white" :ui="buttonStyling">
          <img :src="last" alt="" />
        </UButton>
      </div>
    </div>
  </div>
</template>

<script reactive lang="ts">
import first from "~/assets/icons/first.svg";
import last from "~/assets/icons/last.svg";
import prev from "~/assets/icons/prev.svg";
import next from "~/assets/icons/next.svg";
const items = [
  [{ label: "10", value: "10" }],
  [{ label: "20", value: "20" }],
  [{ label: "30", value: "30" }],
  [{ label: "40", value: "40" }],
  [{ label: "50", value: "50" }],
];

const buttonStyling = {
  base: "dark:bg-opacity-0 dark:ring-opacity-0",
};

export default {
  data() {
    return {
      first,
      last,
      prev,
      next,
      items,
      buttonStyling,
    };
  },
};
</script>

<style scoped>
.pagination-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.page-data {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 12px;
}

.page-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 12px;
}
</style>
