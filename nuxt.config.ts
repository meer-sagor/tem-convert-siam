// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
     link: [
      { rel:"stylesheet", type:"text/css", href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }
     ]
    }
  },
  css: [
    '~/assets/bootstrap.min.css',
    '~/assets/style.css',
    '~/assets/tiny-slider.css'
  ]
})
