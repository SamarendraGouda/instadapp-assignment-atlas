<template>
  <div class="voting-profile-container">
    <VotingProfileVotingLeft />
    <VotingProfileVotingRight />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.voting-profile-container {
  width: 100%;
  margin: 4% 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
