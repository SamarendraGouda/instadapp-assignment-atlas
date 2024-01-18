import type { ReusablesVotingStatusFor } from '#build/components';
<template>
  <div class="vote-confirm-modal">
    <div class="left">
      <ReusablesProfileSection />
    </div>
    <div class="right">
      <div class="content">
        You are voting <ReusablesVotingStatusFor /> for the proposal
      </div>
      <div class="proposal-title">
        Lite Update: Support for direct Lido withdrawal, Morpho v3 and Spark
      </div>
      <div class="button-group">
        <button class="button-group-confirm">Confirm</button>
        <button class="button-group-cancel" @click="isVoteModalOpen = false">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
const isVoteModalOpen = useVoteModal();
</script>

<style scoped>
.vote-confirm-modal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;

  background: #1b2a49;
  border-radius: 12px;
}

.left {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 40px 32px;
  background: #17243f;
}

.right {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 40px 32px;
  background: #1b2a49;
  border-radius: 12px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}

.proposal-title {
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: #fff;
}

.button-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.button-group-confirm {
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #3268f3;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.button-group-cancel {
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #3d4e71;
  cursor: pointer;
}
</style>
