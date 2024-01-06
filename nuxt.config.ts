// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxt/ui', '@nuxtjs/google-fonts'],
  typescript: {
    strict: true
  },
  ui: {
    icons: ['mingcute']
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 600, 700]
      },
      'Open Sans': {
        wght: [400, 500, 600, 700]
      }
    },
    display: 'swap'
  }
});
