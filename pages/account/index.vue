<template>
  <div class="account-section-container">
    <div class="account-section">
      <AccountProfile />
      <div class="right-section">
        <AccountVotingActivity />
        <AccountReceivedDelegation />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.account-section-container {
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 4% 6%;
}

.account-section {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
}

.right-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
}
</style>
