// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    '~/components',
    { path: '~/components/headers' },
    { path: '~/components/base' },
    { path: '~/components/sections' },
    { path: '~/components/cards' },
    { path: '~/components/forms' }
  ],

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-aos',
    '@vue-email/nuxt',
    '@nuxtjs/turnstile',
    'nuxt-rate-limit'
  ],
  turnstile: {
    siteKey: '0x4AAAAAAAS0Q9wK8FOqKxCF'
  },
  nuxtRateLimit: {
    routes: {
      '/api/send-email': {
        maxRequests: 2,
        intervalSeconds: 86400
      }
    }
  },
  vueEmail: {
    autoImport: true
  },
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
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY
    }
  }
});
