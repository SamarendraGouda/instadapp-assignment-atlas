import type { ModalsTransactionBuilder } from '#build/components'; import type {
UModal } from '#build/components'; import type { UButton } from
'#build/components'; import type { UTabs } from '#build/components';
<template>
  <div class="code-container">
    <div class="header">
      <UTabs :items="tabItems" />
      <UButton
        color="white"
        label="Batch Tx"
        @click="isTransactionBuilderOpen = true"
        :ui="{
          strategy: 'override',
          base: 'dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
        }"
      />
    </div>
    <div class="code-form">
      <UFormGroup
        label="Contact Address"
        :ui="{
          wrapper: 'w-full ',
        }"
      >
        <UInput
          :ui="{
            base: 'w-full dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
          }"
        />
      </UFormGroup>
      <UFormGroup
        label="Network"
        :ui="{
          wrapper: 'w-full',
        }"
      >
        <UInputMenu
          :items="items"
          :ui="{
            strategy: 'override',
            base: 'w-full dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
          }"
        />
      </UFormGroup>
      <UFormGroup
        label="Enter ABI"
        :ui="{
          wrapper: 'w-full',
        }"
      >
        <UTextarea
          resize
          :ui="{
            strategy: 'override',
            base: 'w-full h-48 dark:bg-opacity-0 dark:ring-opacity-1 dark:hover:bg-opacity-0',
          }"
        />
      </UFormGroup>
      <UFormGroup
        label="To Address"
        :ui="{
          wrapper: 'w-full ',
        }"
      >
        <UInput
          :ui="{
            base: 'w-full dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
          }"
        />
      </UFormGroup>
      <UFormGroup
        label="ETH Value"
        :ui="{
          wrapper: 'w-full ',
        }"
      >
        <UInput
          :ui="{
            base: 'w-full dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
          }"
        />
      </UFormGroup>
      <UFormGroup
        label="Data"
        :ui="{
          wrapper: 'w-full',
        }"
      >
        <UTextarea
          resize
          :ui="{
            strategy: 'override',
            base: 'w-full h-48 dark:bg-opacity-0 dark:ring-opacity-1 dark:hover:bg-opacity-0',
          }"
        />
      </UFormGroup>
      <div class="button-group">
        <UButton
          color="white"
          :ui="{
            strategy: 'override',
            base: 'dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
            font: 'font-bold',
          }"
        >
          <img src="~/assets/icons/prev.svg" alt="" />
          <span>Back</span>
        </UButton>
        <UButton
          color="white"
          :ui="{
            strategy: 'override',
            base: 'dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
            font: 'font-bold',
          }"
        >
          <span>Next Step</span>
          <img src="~/assets/icons/next.svg" alt="" />
        </UButton>
      </div>
    </div>
    <UModal
      v-model="isTransactionBuilderOpen"
      :ui="{
        strategy: 'override',
        overlay: {
          background: 'bg-gray-200/75 dark:bg-gray-800/75 backdrop-blur-lg',
        },
      }"
    >
      <ModalsTransactionBuilder @close="isTransactionBuilderOpen = false" />
    </UModal>
  </div>
</template>

<script setup>
const isTransactionBuilderOpen = useTxBuilderModal();
const tabItems = [
  {
    label: "Expand",
    value: "expand",
  },
  {
    label: "Collapse",
    value: "collapse",
  },
  {
    label: "Super Collapse",
    value: "superCollapse",
  },
  {
    label: "Raw",
    value: "raw",
  },
];
</script>

<style scoped>
.code-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.code-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
}

.button-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
</style>
