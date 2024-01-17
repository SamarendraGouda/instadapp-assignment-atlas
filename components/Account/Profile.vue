import type { ReusablesMidButton } from '#build/components'; import type {
ReusablesMidOutlineButton } from '#build/components';
<template>
  <div class="profile-container">
    <ReusablesProfileSection />
    <div class="button-group">
      <ReusablesMidButton
        label="Delegate to this Account"
        :icon="delegateIcon"
      />
      <ReusablesMidOutlineButton
        label="Share this
Voting Profile"
        :icon="shareIcon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import shareIcon from "~/assets/icons/share.svg";
import delegateIcon from "~/assets/icons/delegate.svg";
</script>

<style scoped>
.profile-container {
  width: 30%;
  padding: 40px 32px;
  background: linear-gradient(180deg, #1d2c4b 0%, #192846 98.44%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 16px;
}

.button-group {
  background: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
</style>
