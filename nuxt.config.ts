// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    '~/components',
    { path: '~/components/headers' },
    { path: '~/components/base' },
    { path: '~/components/sections' },
    { path: '~/components/cards' }
  ],

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-aos'
  ],
  typescript: {
    strict: true
  },
  ui: {
    icons: ['mingcute', 'logos', 'fa6-brands']
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
  },
  css: ['~/assets/css/main.css'],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  },
  runtimeConfig: {
    githubAccessToken: ''
  }
});
