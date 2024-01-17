import type { UTextarea } from '#build/components'; import type { UInputMenu }
from '#build/components'; import type { UButton } from '#build/components';
import type { UDropdown } from '#build/components'; import type { UButton } from
'#build/components'; import type { UFormGroup } from '#build/components';
<template>
  <div class="description-form">
    <UFormGroup
      label="Proposal Title"
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
      label="Choose Project"
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
      label="Proposal Text"
      :ui="{
        wrapper: 'w-full',
      }"
    >
      <UTextarea
        resize
        :ui="{
          strategy: 'override',
          base: 'w-full h-96 dark:bg-opacity-0 dark:ring-opacity-1 dark:hover:bg-opacity-0',
        }"
      />
    </UFormGroup>
    <UButton
      color="white"
      :ui="{
        strategy: 'override',
        base: 'dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
      }"
    >
      <span>Next Step</span>
      <img src="~/assets/icons/next.svg" alt="" />
    </UButton>
  </div>
</template>

<script setup></script>

<style scoped>
.description-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
}
</style>
