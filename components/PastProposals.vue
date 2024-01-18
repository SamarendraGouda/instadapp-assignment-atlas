<template>
  <div class="past-container">
    <div class="header">
      <div class="title">Past Proposals</div>
      <div class="stats">
        <div class="stats-item">
          <p class="value success">82</p>
          | Executed
        </div>
        <div class="stats-item">
          <p class="value failed">20</p>
          | Failed
        </div>
        <NuxtLink to="/proposals">
          <button class="btn-see-all">
            See All <img :src="buttonNext" alt="" />
          </button>
        </NuxtLink>
      </div>
    </div>
    <!-- <PastProposalTable /> -->
    <div class="proposals-container">
      <div class="proposals-column">
        <div class="column-item proposal">Proposal</div>
        <div class="column-item for">Votes For</div>
        <div class="column-item against">Votes Against</div>
        <div class="column-item abstain">Abstain</div>
        <div class="column-item status">Status</div>
      </div>
      <ProposalsPastCard @click="isOpen = true" />
      <ProposalsPastCard @click="isOpen = true" />
      <ProposalsPastCard @click="isOpen = true" />
    </div>
    <UModal
      v-model="isOpen"
      :ui="{
        strategy: 'override',
        width: 'sm:max-w-4xl',
        overlay: {
          background: 'bg-gray-200/75 dark:bg-gray-800/75 backdrop-blur-lg',
        },
      }"
    >
      <div>
        <ProposalsProposalModalContent @close="isOpen = false" />
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import buttonNext from "~/assets/icons/button-next.svg";
const isOpen = useModal();
</script>

<style scoped>
.past-container {
  margin-top: 6%;
  padding: 0 6%;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.stats {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  color: #fff;
}

.stats-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
}

.value {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}

.success {
  color: #36cd72;
}

.failed {
  color: #f56565;
}

.btn-see-all {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #3268f3;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.btn-see-all img {
  width: 24px;
  height: 24px;
}

.proposals-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}

.proposals-column {
  background: #1b2a49;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  font-weight: 500;
  font-size: 12px;
  color: #5c688c;
}

.column-item {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  font-weight: 500;
  font-size: 12px;
  color: #5c688c;
}

.proposal {
  width: 41.5%;
}

.for {
  width: 12%;
}

.against {
  width: 12%;
}

.abstain {
  width: 5%;
}

.status {
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
