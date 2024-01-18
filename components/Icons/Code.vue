<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="solar:code-broken">
      <path
        id="Vector"
        d="M17.0002 7.83L18.6972 9.356C20.2392 10.745 21.0102 11.439 21.0102 12.33C21.0102 13.22 20.2392 13.915 18.6962 15.303L17.0002 16.83M13.9872 5L12.9932 8.707M11.8432 13L10.0132 19.83M7.00023 7.83L5.30423 9.356C3.76023 10.745 2.99023 11.44 2.99023 12.33C2.99023 13.22 3.76123 13.915 5.30423 15.303L7.00023 16.83"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<script reactive lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "#3F75FF",
    },
  },
});
</script>

