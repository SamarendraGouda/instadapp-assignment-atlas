<template>
  <div class="ap-container">
    <EmptyActiveProposals v-if="shouldRenderEmpty" />
    <div v-else class="not-empty">
      <div class="header">
        <div class="title">Active Proposals</div>
        <div class="button-group">
          <img :src="prev" alt="" />
          <img :src="next" alt="" />
        </div>
      </div>
      <div class="proposals-container">
        <ActiveProposalCard
          v-for="proposal in proposals"
          :key="proposal.id"
          :tagIcon="proposal.tagIcon"
          :tagName="proposal.tagName"
          :proposalTitle="proposal.proposalTitle"
          :proposalDescription="proposal.proposalDescription"
        />
      </div>
    </div>
  </div>
</template>

<script reactive lang="ts">
import avocadoLogo from "~/assets/icons/Avocado.svg";
import prev from "~/assets/icons/button-prev.svg";
import next from "~/assets/icons/Button-next.svg";

const shouldRenderEmpty = false;
const proposals = [
  {
    id: 1,
    tagIcon: avocadoLogo,
    tagName: "Avocado",
    proposalTitle: "Support for direct Lido withdrawal, Morpho v3 and Spark",
    proposalDescription:
      "Activate Avocado Server function to enable bridge functions for all Avocado accounts in the web application.",
  },
  {
    id: 2,
    tagIcon: avocadoLogo,
    tagName: "Avocado",
    proposalTitle: "Support for direct Lido withdrawal, Morpho v3 and Spark",
    proposalDescription:
      "Activate Avocado Server function to enable bridge functions for all Avocado accounts in the web application.",
  },
];

export default {
  data() {
    return {
      prev,
      next,
      shouldRenderEmpty,
      proposals,
    };
  },
  props: {
    proposals: {
      type: Array,
      default: () => proposals,
    },
  },
};
</script>

<style scoped>
.ap-container {
  padding: 0 6%;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
}

.not-empty {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.proposals-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
}
</style>
