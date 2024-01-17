// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/global.css"],
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@use-wagmi/nuxt"],
});
