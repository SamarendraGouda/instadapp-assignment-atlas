<template>
  <div class="proposals-page-container">
    <div class="voting-profile-section">
      <NotConnected v-if="!isConnected" />
      <Profile v-else />
    </div>
    <div class="bottom-container">
      <div class="header">
        <div class="title">Proposals</div>
        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          color="white"
          :trailing="false"
          placeholder="Search..."
          :ui="{
            strategy: 'override',
            base: 'bg-opacity-0 dark:bg-opacity-0',
            variant: {
              outline: 'bg-opacity-0',
            },
          }"
        />
      </div>
      <div class="proposals-container">
        <div class="proposals-column">
          <div class="column-item proposal">Proposal</div>
          <div class="column-item for">Votes For</div>
          <div class="column-item against">Votes Against</div>
          <div class="column-item abstain">Abstain</div>
          <div class="column-item status">Status</div>
        </div>
        <ProposalsCard @click="isOpen = true" />
        <ProposalsCard @click="isOpen = true" />
      </div>
    </div>
    <UModal
      v-model="isOpen"
      :ui="{
        strategy: 'override',
        base: 'sm:max-w-5xl w-5xl',
        overlay: {
          background: 'bg-gray-200/75 dark:bg-gray-800/75 backdrop-blur-lg',
        },
      }"
    >
      <div>
        <ProposalsProposalModalContent @close="isOpen = false" />
      </div>
    </UModal>
    <!-- <UModal
      v-model="isOpen"
      :ui="{
        strategy: 'override',
        base: 'sm:max-w-l',
        overlay: {
          background: 'bg-gray-200/75 dark:bg-gray-800/75 backdrop-blur-lg',
        },
      }"
    >
      <ModalsTransactionBuilder @close="isOpen = false" />
    </UModal> -->
  </div>
</template>

<script reactive>
const isConnected = true;
const isOpen = useModal();

export default {
  data() {
    return {
      isOpen,
      isConnected,
    };
  },
};
</script>

<style scoped>
.proposals-page-container {
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 0 6%;
}

.voting-profile-section {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
}

.bottom-container {
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

.proposals-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
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
