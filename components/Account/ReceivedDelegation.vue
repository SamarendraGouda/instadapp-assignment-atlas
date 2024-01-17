<template>
  <div class="delegation-container">
    <div class="delegation-title">Received Delegation</div>
    <div class="delegations">
      <div v-for="delegation in delegations" class="delegation">
        <div class="from">
          <img
            src="https://avatars.githubusercontent.com/u/6791501?v=4"
            alt=""
          />
          <div class="from-address">
            0xC2A1131243fEE6d77319F141eBfeE414336Ba120
          </div>
          <div v-if="delegation.isSelf" class="self">SELF</div>
        </div>
        <div class="amount">
          <img :src="flash" alt="" />
          2.0M
        </div>
      </div>
    </div>
  </div>
</template>

<script reactive lang="ts">
import flash from "~/assets/icons/flash.svg";

const delegations = [
  {
    id: 1,
    from: "0xC2A1131243fEE6d77319F141eBfeE414336Ba120",
    amount: "2.0M",
    isSelf: true,
  },
  {
    id: 2,
    from: "0xC2A1131243fEE6d77319F141eBfeE414336Ba120",
    amount: "2.0M",
    isSelf: false,
  },
  {
    id: 3,
    from: "0xC2A1131243fEE6d77319F141eBfeE414336Ba120",
    amount: "2.0M",
    isSelf: false,
  },
  {
    id: 4,
    from: "0xC2A1131243fEE6d77319F141eBfeE414336Ba120",
    amount: "2.0M",
    isSelf: false,
  },
  {
    id: 5,
    from: "0xC2A1131243fEE6d77319F141eBfeE414336Ba120",
    amount: "2.0M",
    isSelf: false,
  },
];

export default {
  data() {
    return {
      flash,
      delegations,
    };
  },
};
</script>

<style scoped>
.delegation-container {
  width: 100%;
  background: linear-gradient(180deg, #1d2c4b 0%, #192846 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 24px;
  gap: 24px;
}

.delegation-title {
  background: transparent;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.delegations {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  background: transparent;
}

.delegation {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: transparent;
  padding-bottom: 12px;
  border-bottom: 1px solid #283859;
}

.delegation:last-child {
  padding-bottom: 0px;
  border-bottom: 0;
}

.from {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  background: transparent;
}

.from img {
  background: transparent;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.from-address {
  background: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.self {
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #3f75ff;
  color: #fff;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 700;
}

.amount {
  display: flex;
  width: 73px;
  height: 36px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 4px;
  background: #283859;
}

.amount img {
  background: transparent;
  height: 20px;
  width: 20px;
}
</style>
