<template>
  <div class="container-left">
    <ReusablesProfileSection />
    <div class="button-group">
      <button class="button-group-button">Delegate</button>
      <button class="button-group-button">Voting History</button>
    </div>
    <NuxtLink to="/create-proposal">
      <button class="proposal-button">+ Create New Proposal</button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container-left {
  background: #1b2a49;
  height: 354px;
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #fff;
  padding: 40px 0;
  border-radius: 8px;
}

.profile-details {
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.profile-details img {
  border-radius: 50%;
  height: 80px;
  width: 80px;
}

.profile-address {
  background: transparent;
  font-size: 18px;
  font-weight: 500;
}
.voting-power {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.voting-power-text {
  background: transparent;
  font-size: 18px;
  font-weight: 500;
}

.voting-power-value {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: #283859;
  padding: 8px 8px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
}

.voting-power-value img {
  background: transparent;
  height: 20px;
  width: 20px;
}

.voting-power-del {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.voting-power-del img {
  background: transparent;
  height: 20px;
  width: 20px;
}

.voting-power-del-value {
  background: transparent;
  font-size: 18px;
  font-weight: 500;
}

.button-group {
  width: 310px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.button-group-button {
  background: transparent;
  width: 151px;
  border: 1px solid #3d4e71;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
}

.proposal-button {
  width: 310px;
  background: #3f75ff;
  border-radius: 8px;
  padding: 16px 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}
</style>
