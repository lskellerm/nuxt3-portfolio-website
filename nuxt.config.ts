// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxt/ui'],
  typescript: {
    strict: true
  },
  ui: {
    icons: ['mingcute']
  }
});
