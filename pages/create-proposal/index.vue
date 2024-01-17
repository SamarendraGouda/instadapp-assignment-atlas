<template>
  <div class="create-proposal-container">
    <div class="profile-section">
      <ReusablesProfileSection />
      <div class="button-group">
        <ReusablesMidOutlineButton label="Delegate" />
        <ReusablesMidOutlineButton label="Voting History" />
      </div>
    </div>
    <CreateProposalStepForm />
  </div>
</template>

<script setup></script>

<style scoped>
.create-proposal-container {
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  margin: 4% 6%;
}

.profile-section {
  background: linear-gradient(180deg, #1d2c4b 0%, #192846 98.44%);
  width: 395px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
}

.button-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
</style>
