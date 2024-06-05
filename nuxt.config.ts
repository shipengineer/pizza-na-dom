export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }],
  ],
  imports: {
    dirs: ['./app/stores/**']
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Pizza Na Dom',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  dir: {
    assets: 'app/assets',
    public: 'app/public',
    modules: 'app/modules',
    plugins: 'app/plugins',
    pages: 'src/pages',
    layouts: 'src/layouts',
    middleware: 'src/middleware',
  },
  css:['~/app/assets/styles/reset.css'],
  components: ['src/shared'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {

          additionalData: '@use "~/app/assets/styles/main.scss" as *; ',
        },
      },
    },
  },
});
