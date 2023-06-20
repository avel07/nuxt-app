// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
      rootId: '__nuxt',
      head: {
          viewport: 'user-scalable=no, initial-scale=1, width=device-width, viewport-fit=cover',
          htmlAttrs: {
              lang: 'ru'
          },
          charset: 'utf-8',
          title: 'Learning Nuxt',
          link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', integrity: 'sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM', crossorigin: 'anonymous'}],
          script: [{ src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz', crossorigin: 'anonymous'}],
      },
  },
  devtools: { enabled: false }
})