import type { ReusablesPagination } from '#build/components'; import type {
ReusablesVotingStatusFor } from '#build/components';
<template>
  <div class="voting-activity-container">
    <div class="header">
      <div class="voting-title">Voting Activity</div>
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
    <div class="activities">
      <div v-for="activity in activities" class="activity">
        <div class="activity-details">
          <img :src="activity.logo" alt="" />
          <div class="activity-namedata">
            <p class="activity-name">
              {{ activity.title }}
            </p>
            <p class="voting-date">Voting on March 12, 2023</p>
          </div>
        </div>

        <div class="vote-weight">
          <p>Voting Weight</p>
          <div class="weight">
            <p>2.0M</p>
          </div>
        </div>
        <ReusablesVotingStatusFor v-if="activity.status === `For`" />
        <ReusablesVotingStatusAgainst v-if="activity.status === `Against`" />
      </div>
    </div>
    <ReusablesPagination />
  </div>
</template>

<script reactive lang="ts">
import instadapp from "~/assets/icons/instadapp_s.svg";
import avocado from "~/assets/icons/Avocado.svg";
import lite from "~/assets/icons/lite.svg";

const activities = ref([
  {
    id: 1,
    logo: instadapp,
    title: "Integration Streamlining and Growth Fund Grant",
    status: "For",
  },
  {
    id: 2,
    logo: avocado,
    title: "Extend Liquidity Mining and Staking Rewards",
    status: "Against",
  },
  {
    id: 3,
    logo: lite,
    title:
      "Lite Update: Support for direct Lido withdrawal, Morpho v3 and Spark",
    status: "For",
  },
  {
    id: 4,
    logo: instadapp,
    title: "Lite: Update implementation to remove Euler",
    status: "For",
  },
  {
    id: 5,
    logo: avocado,
    title: "Extend Liquidity Mining and Staking Rewards",
    status: "For",
  },
]);

export default {
  data() {
    return {
      activities,
    };
  },
};
</script>

<style scoped>
.voting-activity-container {
  width: 100%;
  background: linear-gradient(180deg, #1d2c4b 0%, #192846 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 24px;
  gap: 20px;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
}

.voting-title {
  background: transparent;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.search {
  background: transparent;
  width: 40px;
  padding: 0 32px;
  height: 40px;
  border-radius: 8px;
  background: #283859;
}

.activities {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  background: transparent;
}

.activity {
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

.activity:last-child {
  padding-bottom: 0px;
  border-bottom: 0;
}

.activity-details {
  width: 580px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  background: transparent;
}

.activity-details img {
  background: transparent;
  width: 56px;
  height: 56px;
}

.activity-namedata {
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.activity-name {
  background: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.voting-date {
  background: transparent;
  color: #5c688c;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
}

.vote-weight {
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.vote-weight p {
  background: transparent;
  color: #5c688c;
  font-size: 10px;
  font-style: center transparent;
  width: 100%;
  border-radius: 4px;
}

.weight {
  background: #283859;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
}
.weight p {
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
</style>
