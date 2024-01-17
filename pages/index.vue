<template>
  <div class="body-container">
    <Hero />
    <ActiveProposals />
    <PastProposals />
    <GovernanceActivity />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.body-container {
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
