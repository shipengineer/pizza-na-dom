export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      addressSuggestionUrl: process.env.NUXT_PUBLIC_ADDRESS_SUGGESTION_URL,
      apiToken: process.env.NUXT_API_TOKEN,
    }
  },
  devtools: { enabled: true },
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }],
  ],
  imports: {
    dirs: ['./app/stores/**'],
    presets: [
      {
        from: '@vueuse/shared',
        imports: ['watchDebounced']
      }
    ]
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
