<template>
  <div class="card-container">
    <div class="proposal">
      <div class="proposal-title">
        Extend Liquidity Mining and Staking Rewards
      </div>
      <div class="proposal-details">Proposed March 14, 2023 at 09:16</div>
    </div>
    <div class="vote-data">
      <div class="for">
        <div class="for-data">
          <div class="for-percentage">87.2%</div>
          <div class="for-value">7.64M</div>
        </div>
        <UMeter
          :value="87.2"
          color="green"
          :ui="{
            list: 'hidden',
          }"
        />
      </div>
      <div class="against">
        <div class="for-data">
          <div class="against-percentage">9.8%</div>
          <div class="against-value">7.64M</div>
        </div>
        <UMeter
          :value="9.8"
          color="red"
          :ui="{
            list: 'hidden',
          }"
        />
      </div>
      <div class="abstain">
        <div class="abstain-percentage">20.7%</div>
        <div class="abstain-value">0.29M</div>
      </div>
      <div class="status">
        <img :src="tick" alt="" />
        <div class="status-text">Executed</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tick from "~/assets/icons/simpleTick.svg";
</script>

<style scoped>
.card-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #1d2c4b 0%, #192846 100.8%);
  border-radius: 8px;
  padding: 24px 32px 32px 32px;
  gap: 32px;
  cursor: pointer;
}

.proposal {
  background: transparent;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
}

.proposal-title {
  background: transparent;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

.proposal-details {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  color: #5c688c;
  font-size: 16px;
  font-weight: 500;
}

.date {
  background: transparent;
  color: #5c688c;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

.author {
  background: #29395a;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  padding: 10px 12px;
}

.vote-data {
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
}

.for,
.against {
  width: 150px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
}

.for-data {
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
}

.for-percentage {
  background: transparent;
  color: #36cd72;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.for-value {
  background: transparent;
  color: #5c688c;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

.against-percentage {
  background: transparent;
  color: #f56565;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.against-value {
  background: transparent;
  color: #5c688c;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

.abstain {
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.abstain-percentage {
  background: transparent;
  color: #5c688c;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.abstain-value {
  background: transparent;
  color: #5c688c;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

.status {
  background: #32c34a1a;
  padding: 12px 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.status-text {
  background: transparent;
  color: #36cd72;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

.status img {
  background: transparent;
  height: 24px;
  width: 24px;
}
</style>
