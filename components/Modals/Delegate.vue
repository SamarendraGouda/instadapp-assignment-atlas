import type { ReusablesMidOutlineButton } from '#build/components';
<template>
  <div class="delegate-modal-container">
    <div class="modal-title">Delegate to 0x9522229...CC4BAfe5</div>
    <div class="modal-box">
      <div class="currently-delegate-to">
        <div class="modal-content-title">Currently Delegated to</div>
        <div class="currently-delegate-to-address">0x9522229...CC4BAfe5</div>
        <div class="transfer-text">
          Delegated Voting Power
          <div class="val">20M</div>
          <img src="~/assets/icons/transfer-right.svg" alt="" />
          <div class="val">0</div>
        </div>
      </div>
      <div class="delegate-amount">
        <img src="~/assets/icons/delegateDown.svg" alt="" />
        20M
      </div>
    </div>
    <div class="modal-box">
      <div class="currently-delegate-to">
        <div class="modal-content-title">Delegate to</div>
        <div class="currently-delegate-to-address">0x9522229...CC4BAfe5</div>
        <div class="transfer-text">
          Delegated Voting Power
          <div class="val">0</div>
          <img src="~/assets/icons/transfer-right.svg" alt="" />
          <div class="val">20M</div>
        </div>
      </div>
      <div class="delegate-amount">
        <img src="~/assets/icons/delegateUp.svg" alt="" />
        20M
      </div>
    </div>
    <div class="warn-text">
      <img src="~/assets/icons/warn.svg" alt="" />
      This will delegate all your voting power to this new delegate.
    </div>
    <div class="button-group">
      <button class="delegate-button">
        <img src="~/assets/icons/flash_outline.svg" alt="" />
        Delegate
      </button>
      <ReusablesMidOutlineButton label="Choose Another Delegate" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.delegate-modal-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 32px;
  background: #1b2a49;
  border-radius: 12px;
}

.modal-title {
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #fff;
}

.modal-box {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: #213356;
  border-radius: 8px;
}

.delegate-amount {
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}

.currently-delegate-to {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.modal-content-title {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}

.currently-delegate-to-address {
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border-radius: 6px;
  border: 1px solid #455473;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 4px;
}

.warn-text {
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.transfer-text {
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  color: #5c688c;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.val {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: #31456c;
  border-radius: 6px;
  padding: 4px 8px;
}

.button-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.delegate-button {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #3268f3;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  padding: 0 16px;
  cursor: pointer;
}
</style>
