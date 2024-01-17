<template>
  <div class="ap-card-container">
    <div class="tags">
      <div class="tag avocado">
        <img :src="tagIcon" alt="" />
        {{ tagName }}
      </div>
      <div class="tag">
        <img src="~/assets/icons/pending.svg" alt="" />
        Pending
      </div>
    </div>
    <div class="title">
      {{ proposalTitle }}
    </div>
    <div class="description">
      {{ proposalDescription }}
    </div>
    <div class="meter">
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
    <div class="footer">
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
  </div>
</template>

<script reactive lang="ts">
export default {
  props: {
    tagIcon: {
      type: String,
      default: "",
    },
    tagName: {
      type: String,
      default: "",
    },
    proposalTitle: {
      type: String,
      default: "",
    },
    proposalDescription: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.ap-card-container {
  width: 608px;
  height: 372px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  border-radius: 20px;
  background: linear-gradient(180deg, #1d2c4b 0%, #192846 100%);
}

.ap-card-container > * {
  background: transparent !important;
}

.tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}

.tags > * {
  background: transparent;
  color: #fff;
}

.tag {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 2px;
  background: #233455;
}

.avocado {
  color: #36cd72;
  font-size: 14px;
  font-weight: 600;
  background: #32c34a1a !important;
}

.tag > img {
  background: transparent !important;
  height: 24px;
  width: 24px;
}

.title {
  width: 90%;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.description {
  color: #5c688c;
}

.meter {
  width: 100%;
}

.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.footer > * {
  background: transparent !important;
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
</style>
