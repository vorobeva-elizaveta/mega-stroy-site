// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper', '@vesp/nuxt-fontawesome'],
  swiper:{
    modules: ['navigation', 'pagination'],
    
  },
  fontawesome: {
    icons: {
      solid: ['user', 'user-tie', 'paint-roller', 'user-group', 'calendar-check'],
    }
  },
  css: ['~/shared/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
