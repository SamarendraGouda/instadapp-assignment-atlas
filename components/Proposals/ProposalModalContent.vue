<template>
  <div class="proposal-modal-container">
    <div class="left-container">
      <div class="tags">
        <TagsAvocado />
      </div>
      <div class="proposal-title">
        Lite Update: Support for direct Lido withdrawal, Morpho v3 and Spark
      </div>
      <div class="proposal-meter">
        <UMeterGroup
          :min="0"
          :max="100"
          size="md"
          :ui="{
            list: 'hidden',
          }"
        >
          <UMeter :value="42" color="green" />
          <UMeter :value="8" color="red" />
          <UMeter :value="24" color="gray" />
        </UMeterGroup>
      </div>
      <div class="proposal-quorum-time">
        <div class="quorum">
          Quorum:
          <div class="quorum-text">
            <img src="~/assets/icons/tick.svg" alt="" />
            Reached
          </div>
        </div>
        <div class="time-remaining">
          Time Remaining
          <div class="time-remaining-text">06:23</div>
        </div>
      </div>
      <div class="proposal-description">
        <p>
          This is a proposal for the on-chain vote IGP#6 - Lite Update: Update
          implementation to add Morpho v3, Spark Protocol and stETH Direct
          Withdrawals. The proposal will integrate Morpho v3 and Spark into the
          allocation pools for the ETH Lite vault and update the stETH
          withdrawal mechanism.The integration of Morpho v3 and Spark into the
          protocol allocation pool will enhance the ETH vault by providing
          additional yield sources and increased diversification. With this
          addition, the ETH strategy can now be executed in these protocols.
        </p>
        <br />
        <p>
          The proposed stETH update will modify the withdrawal mechanism for
          stETH from the vault. With this change, the vault will now be able to
          directly redeem stETH from Lido. At any time when the users withdraw
          the user can first withdraw from the available idle liquidity if more
          is needed, the vault can redeem from Lido directly. This update makes
          the Lite vault fully withdrawable at any time.
        </p>
      </div>
      <div class="proposal-code-execution">
        <p>Code Execution</p>
        <ReusablesCodeExecItem />
        <ReusablesCodeExecItem />
      </div>
      <div class="proposal-links">
        <div class="links-title">Links</div>
        <div v-for="link in linkCount" class="link">
          <div class="label">Governance</div>
          <div class="link-text">https://instadapp.io</div>
        </div>
      </div>
    </div>
    <div class="right-container">
      <div class="for-button" @click="isVoteModalOpen = true">
        <img src="~/assets/icons/for.svg" alt="" />
        <div class="for-text">Vote For</div>
      </div>
      <div class="against-button">
        <img src="~/assets/icons/against.svg" alt="" />
        <div class="against-text">Vote Against</div>
      </div>
      <div class="abstain-button">Abstain</div>
    </div>
    <UModal
      v-model="isVoteModalOpen"
      :ui="{
        strategy: 'override',
        width: 'sm:max-w-4xl',
        overlay: {
          background: 'bg-gray-200/75 dark:bg-gray-800/75 backdrop-blur-lg',
        },
      }"
    >
      <ModalsVoteConfirmContent @close="isVoteModalOpen = false" />
    </UModal>
  </div>
</template>

<script setup>
const linkCount = [1, 2, 3];
const isVoteModalOpen = useVoteModal();
</script>

<style scoped>
.proposal-modal-container {
  display: flex;
  justify-content: space-between;
  padding: 32px 40px;
  width: 100%;
  background: #1b2a49;
}

.left-container {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
}

.tags {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.proposal-title {
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  color: #fff;
}

.proposal-meter {
  width: 100%;
  height: 8px;
  background: #3268f3;
  border-radius: 4px;
}

.proposal-quorum-time {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.quorum,
.time-remaining {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.time-remaining {
  color: #5c688c;
}

.quorum-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.quorum-text,
.quorum-text > * {
  background: transparent;
  color: #36cd72;
}

.time-remaining-text {
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #412132;
  color: #f56565;
  padding: 0 16px;
  border-radius: 200px;
}

.proposal-description {
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-align: left;
}

.proposal-code-execution {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #17243f;
  padding: 12px 20px;
  font-size: 12px;
  gap: 10px;
}

.proposal-code-execution p {
  background: transparent;
  color: #5c688c;
}

.code {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  background: #1a2948;
  padding: 8px;
  border-radius: 6px;
}

.sl {
  color: #5c688c;
  padding: 4px 8px;
  border-radius: 4px;
}

.code-text {
  background: transparent;
  color: #fff;
}

.proposal-links {
  width: 100%;
  background: #17243f;
  padding: 12px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}

.links-title {
  background: transparent;
  color: #5c688c;
  font-size: 12px;
  font-weight: 500;
}

.link {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background: #1a2948;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  padding: 8px;
}

.link .label {
  background: transparent;
  text-align: left;
  width: 100px;
  color: #5c688c;
}

.link .link-text {
  background: transparent;
  color: #3f75ff;
  font-weight: 700;
}

.right-container {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.for-button,
.against-button {
  width: 128px;
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.for-button {
  background: #32c34a1a;
}

.against-button {
  background: #ec62631a;
}

.for-text,
.against-text {
  background: transparent;
  font-size: 14px;
  font-weight: 600;
}

.for-text {
  color: #36cd72;
}

.against-text {
  color: #ec6263;
}

.abstain-button {
  display: flex;
  width: 128px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #17243f;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
</style>
