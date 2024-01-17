<template>
  <div class="table-container">
    <UTable
      :columns="columns"
      :rows="data"
      :ui="{
        strategy: 'override',
        th: {
          background: 'bg-2',
        },
      }"
    >
    </UTable>
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    key: "proposal",
    label: "Proposal",
  },
  {
    key: "for",
    label: "Votes for",
  },
  {
    key: "against",
    label: "Votes against",
  },
  {
    key: "abstain",
    label: "Abstain",
  },
  {
    key: "status",
    label: "Status",
  },
];

const data = [
  {
    id: 1,
    proposal: "Support for direct Lido withdrawal, Morpho v3 and Spark",
    for: "1,000,000",
    against: "1,000,000",
    abstain: "1,000,000",
    status: "Active",
  },
  {
    id: 2,
    proposal: "Support for direct Lido withdrawal, Morpho v3 and Spark",
    for: "1,000,000",
    against: "1,000,000",
    abstain: "1,000,000",
    status: "Active",
  },
];
</script>

<style scoped>
.table-container {
  width: 100%;
  max-width: 1440px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: linear-gradient(90deg, #1d2c4b 0%, #192846 100.8%) !important;
  overflow: hidden;
}

.column {
  width: 100%;
}

.col {
  width: 100%;

  border-radius: 8px;
}
</style>
