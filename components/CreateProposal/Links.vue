<template>
  <div class="link-form">
    <UFormGroup
      label="Governance Forum Link"
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
      label="Github Repo"
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
      label="Test/Simulation"
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
</template>

<script setup></script>

<style scoped>
.link-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
