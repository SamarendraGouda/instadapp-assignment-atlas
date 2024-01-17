<template>
  <div class="profile-section-container">
    <div class="profile-details">
      <img src="https://avatars.githubusercontent.com/u/6791501?v=4" alt="" />
      <div class="profile-address">0x3f75ff...3f75ff</div>
    </div>
    <div class="voting-power">
      <div class="voting-power-text">Voting Power:</div>
      <div class="voting-power-value">
        <img src="~/assets/icons/flash.svg" alt="" />
        2.1M
      </div>
      <div class="voting-power-del">
        <img src="~/assets/icons/del.svg" alt="" />
        <div class="voting-power-del-value">5</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.profile-section-container {
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
  font-size: 12px;
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
  font-size: 14px;
  font-weight: 500;
}
</style>
