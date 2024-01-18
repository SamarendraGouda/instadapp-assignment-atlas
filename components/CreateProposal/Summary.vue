import type { UButton } from '#build/components'; import type {
ReusablesLinkItem } from '#build/components'; import type {
ReusablesCodeExecItem } from '#build/components';
<template>
  <div class="summary-form">
    <div class="summary-item proposal-title">
      <div class="title-text">Proposal Title</div>
      <div class="value">
        Lite Update: Support for direct Lido withdrawal, Morpho v3 and Spark
      </div>
    </div>
    <div class="summary-item proposal-description">
      <div class="title-text">Proposal Description</div>
      <div class="value">
        This is a proposal for the on-chain vote IGP#6 - Lite Update: Update
        implementation to add Morpho v3, Spark Protocol and stETH Direct
        Withdrawals. The proposal will integrate Morpho v3 and Spark into the
        allocation pools for the ETH Lite vault and update the stETH withdrawal
        mechanism.
        <p>
          The integration of Morpho v3 and Spark into the protocol allocation
          pool will enhance the ETH vault by providing additional yield sources
          and increased diversification. With this addition, the ETH strategy
          can now be executed in these protocols.
        </p>
        <p>
          The proposed stETH update will modify the withdrawal mechanism for
          stETH from the vault. With this change, the vault will now be able to
          directly redeem stETH from Lido. At any time when the users withdraw
          the user can first withdraw from the available idle liquidity if more
          is needed, the vault can redeem from Lido directly. This update makes
          the Lite vault fully withdrawable at any time.
        </p>
      </div>
    </div>
    <div class="summary-item proposal-code">
      <div class="title-text">Code Execution</div>
      <div class="value">
        <ReusablesCodeExecItem />
        <ReusablesCodeExecItem />
        <div class="tx-buttons">
          <div class="copy"><img :src="copy" />Copy RAW Tx data</div>
          <UButton
            color="primary"
            :ui="{
              strategy: 'override',
              base: 'dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
            }"
          >
            <span style="color: white; font-size: 12px; font-weight: 600"
              >Simulate</span
            >
            <img src="~/assets/icons/next.svg" alt="" />
          </UButton>
        </div>
      </div>
    </div>
    <div class="summary-item proposal-links">
      <div class="title-text">Links</div>
      <div class="value">
        <ReusablesLinkItem />
        <ReusablesLinkItem />
      </div>
    </div>
    <div class="button-group">
      <UButton
        color="white"
        :ui="{
          strategy: 'override',
          base: 'dark:bg-opacity-0 dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
          font: 'font-bold',
        }"
      >
        <img src="~/assets/icons/prev.svg" alt="" />
        <span>Back</span>
      </UButton>
      <UButton
        color="primary"
        :ui="{
          strategy: 'override',
          base: 'dark:ring-opacity-1 h-10 dark:hover:bg-opacity-0',
        }"
      >
        <span style="color: white; font-size: 12px; font-weight: 600"
          >Submit</span
        >
        <img src="~/assets/icons/next.svg" alt="" />
      </UButton>
    </div>
  </div>
</template>

<script setup>
import copy from "~/assets/icons/copy.svg";
</script>

<style scoped>
.summary-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
}

.summary-item {
  background: #17243f;
  padding: 12px 20px;
  border-radius: 15px;
}

.proposal-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.title-text {
  font-size: 12px;
  font-weight: 500;
  color: #5c688c;
}

.value {
  font-size: 18px;
  font-weight: 400;
}

.proposal-description {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.proposal-description .value {
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
}

.proposal-code {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.proposal-code .value {
  width: 100%;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
}

.tx-buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}

.proposal-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.proposal-links .value {
  width: 100%;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
}

.copy {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  cursor: pointer;
}

.button-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}
</style>
