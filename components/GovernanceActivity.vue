<template>
  <div class="ga-container">
    <div class="title">Governance Activity</div>
    <div class="cards">
      <div class="card submitted">
        <img :src="submittedIcon" alt="" />
        <div class="text">
          <div class="value submitted-value">20</div>
          <div class="tagline">Proposals Submitted</div>
        </div>
      </div>
      <div class="card delegated">
        <img :src="delegatedIcon" alt="" />
        <div class="text">
          <div class="value delegated-value">28.2M</div>
          <div class="tagline">Total Deleg INST</div>
        </div>
      </div>
      <div class="card participant">
        <img :src="participantIcon" alt="" />
        <div class="text">
          <div class="value participant-value">68</div>
          <div class="tagline">Active Participants</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import submittedIcon from "~/assets/icons/submitted.svg";
import delegatedIcon from "~/assets/icons/delegated.svg";
import participantIcon from "~/assets/icons/participant.svg";
</script>

<style scoped>
.ga-container {
  margin: 6% 0;
  padding: 0 6%;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 281px;
  border-radius: 20px;
  padding: 40px;
}

.card > *,
.card > * > * {
  background: transparent !important;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.value {
  font-size: 48px;
  font-weight: 700;
}

.submitted {
  background: rgba(51, 50, 46, 0.8);
}
.delegated {
  background: rgba(33, 54, 98, 0.7);
}
.participant {
  background: rgba(31, 69, 57, 0.7);
}
.submitted-value {
  color: #f2c94c;
}

.delegated-value {
  color: #3f75ff;
}

.participant-value {
  color: #36cd72;
}
</style>
