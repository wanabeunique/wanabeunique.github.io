// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt-svgo',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts',
  ],
  build: {
    transpile: [
      'three',
    ],
  },
  i18n: {
    vueI18n: './i18n.config.ts' 
  },
  shadcn:{
    prefix: '',
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      'JetBrains Mono': true
    }
  }
})
