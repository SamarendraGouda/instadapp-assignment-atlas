<template>
  <div class="not-connected-container">
    <img :src="wallet" alt="" />
    <div class="not-connected-text">Connect Wallet To See Voting Profile</div>
    <button class="not-connected-button">Connect Wallet</button>
  </div>
</template>

<script setup lang="ts">
import wallet from "~/assets/icons/wallet.svg";
</script>

<style scoped>
.not-connected-container {
  width: 100%;
  margin: 4% 0;
  background: #1b2a49;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  color: #fff;
  padding: 40px 0;
  border-radius: 8px;
}

.not-connected-container > * {
  background: transparent;
}

.not-connected-button {
  background: #3f75ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 16px 24px;
  cursor: pointer;
}
</style>
