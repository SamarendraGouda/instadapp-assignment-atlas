import type { IconsDocument } from '#build/components'; import type {
CreateProposalLinks } from '#build/components'; import type {
CreateProposalDescription } from '#build/components';
<template>
  <div class="step-form-container">
    <div class="title">Create New Proposal</div>
    <div class="tabs-container">
      <div
        v-for="tab in tabs"
        :class="selectedTab === tab.value ? 'selected-tab' : 'tab'"
        @click="selectedTab = tab.value"
      >
        <div class="icon">
          <IconsDocument
            :color="selectedTab === 'description' ? '#3F75FF' : 'white'"
            v-if="tab.value === 'description'"
          />
          <IconsCode
            :color="selectedTab === 'code' ? '#3F75FF' : 'white'"
            v-else-if="tab.value === 'code'"
          />
          <IconsLink
            :color="selectedTab === 'links' ? '#3F75FF' : 'white'"
            v-else-if="tab.value === 'links'"
          />
          <IconsSummary
            :color="selectedTab === 'summary' ? '#3F75FF' : 'white'"
            v-else-if="tab.value === 'summary'"
          />
        </div>
        {{ tab.label }}
      </div>
    </div>
    <div class="form-container">
      <CreateProposalDescription v-if="selectedTab === 'description'" />
      <CreateProposalCode v-else-if="selectedTab === 'code'" />
      <CreateProposalLinks v-else-if="selectedTab === 'links'" />
      <CreateProposalSummary v-else-if="selectedTab === 'summary'" />
    </div>
  </div>
</template>

<script setup>
const selectedTab = useTabs();

const tabs = [
  {
    label: "Description",
    value: "description",
  },
  {
    label: "Code",
    value: "code",
  },
  {
    label: "Links",
    value: "links",
  },
  {
    label: "Summary",
    value: "summary",
  },
];
</script>

<style scoped>
.step-form-container {
  width: 821px;
  background: linear-gradient(180deg, #1d2c4b 0%, #192846 100%);
  padding: 32px 56px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  border-radius: 12px;
}

.title {
  width: 100%;
}

.tabs-container {
  width: auto;
  height: 56px;
  padding: 0 8px;
  background: #17243f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  gap: 8px;
}

.tab {
  width: 100%;
  height: 40px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.tab:hover {
  cursor: pointer;
  background: #1d2c4b;
}

.selected-tab {
  width: 100%;
  height: 40px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #1d2c4b;
  gap: 6px;
}

.form-container {
  width: 100%;
}
</style>
