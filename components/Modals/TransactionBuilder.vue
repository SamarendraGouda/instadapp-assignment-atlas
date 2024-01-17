<template>
  <div class="tx-builder-modal">
    <div class="modal-title">Transaction Builder</div>
    <div class="modal-content">
      <div class="tx-list">
        <div v-for="item in [1, 2]" class="tx-list-item">
          <div class="sl">{{ item }}</div>
          <div class="list-item-content">0x9522229...CC4BAfe5</div>
        </div>
      </div>
      <div class="tx-simulation">
        <div class="tx-simulation-title">
          <img src="~/assets/icons/tick_2.svg" alt="" />
          This transaction will most likely succeed
        </div>
        <div class="tx-simulation-content">
          View complete simulation report on
          <p>
            Tenderly
            <img src="~/assets/icons/link.svg" alt="" />
          </p>
        </div>
      </div>

      <div class="tx-buttons">
        <button class="tx-button-clear">Clear</button>
        <button class="tx-button-simulate">Simulate</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.tx-builder-modal {
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
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #fff;
}

.modal-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.tx-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #213356;
  padding: 16px;
  border-radius: 8px;
}

.tx-list-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 6px;
  border: 1px solid #455473;
  padding: 8px 16px 8px 8px;
}

.sl {
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #5c688c;
}

.list-item-content {
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #fff;
}

.tx-simulation {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  background: #1d3948;
  padding: 8px 16px;
  border-radius: 8px;
}

.tx-simulation-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: #36cd72;
  gap: 8px;
}

.tx-simulation-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #fff;
  padding: 0 30px;
}

.tx-simulation-content p {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #3268f3;
  font-weight: 600;
  cursor: pointer;
}

.tx-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.tx-button-simulate {
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

.tx-button-clear {
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
