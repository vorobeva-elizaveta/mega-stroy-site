// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  modules: ['nuxt-swiper', '@vesp/nuxt-fontawesome', 'nuxt-primevue'],
  swiper:{
    modules: ['navigation', 'pagination'],
  },
  fontawesome: {
    icons: {
      solid: ['user', 'user-tie', 'paint-roller', 'user-group', 'calendar-check', 'flask', 'trowel', 'building-shield'],
    }
  },
  primevue:{
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/lara/') },
  },
  css: ['primevue/resources/themes/aura-light-blue/theme.css', '~/shared/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss:{},
      autoprefixer: {},
    },
  }
})
