<template>
  <div class="container-right">
    <div class="right-title">
      Recent Voting Activity
      <button class="btn-see-all">
        See All <img :src="buttonNext" alt="" />
      </button>
    </div>
    <div class="activities">
      <div v-for="activity in activities" class="activity">
        <div class="activity-title">
          <img :src="activity.logo" alt="" />
          {{ activity.title }}
        </div>
        <ReusablesVotingStatusFor v-if="activity?.status === `For`" />
        <ReusablesVotingStatusAgainst v-if="activity?.status === `Against`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import buttonNext from "~/assets/icons/button-next.svg";
import instadapp from "~/assets/icons/instadapp_s.svg";
import avocado from "~/assets/icons/Avocado.svg";
import lite from "~/assets/icons/lite.svg";

const activities = ref([
  {
    logo: instadapp,
    title: "Integration Streamlining and Growth Fund Grant",
    status: "For",
  },
  {
    logo: avocado,
    title: "Extend Liquidity Mining and Staking Rewards",
    status: "Against",
  },
  {
    logo: lite,
    title:
      "Lite Update: Support for direct Lido withdrawal, Morpho v3 and Spark",
    status: "For",
  },
  {
    logo: instadapp,
    title: "Lite: Update implementation to remove Euler",
    status: "For",
  },
  {
    logo: avocado,
    title: "Extend Liquidity Mining and Staking Rewards",
    status: "For",
  },
]);
</script>

<style scoped>
.container-right {
  background: #1b2a49;
  display: flex;
  width: 65%;
  height: 354px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  color: #fff;
  padding: 20px 24px;
  border-radius: 8px;
}

.right-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  font-size: 24px;
  font-weight: 500;
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
  background: transparent;
  width: 24px;
  height: 24px;
}

.activities {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: transparent;
}

.activity {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid #263657;
}

.activity:first-child {
  padding-top: 0;
}

.activity:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.activity > .activity-title {
  background: transparent;
}

.activity-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.activity-title img {
  background: transparent;
  width: 24px;
  height: 24px;
}
</style>
