export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiToken: process.env.NUXT_API_TOKEN,
            addressSuggestionUrl: process.env.NUXT_PUBLIC_ADDRESS_SUGGESTION_URL,
            emailSuggestionUrl: process.env.NUXT_PUBLIC_EMAIL_SUGGESTION_URL,
            pizzeriaLocation: process.env.NUXT_PUBLIC_PIZZERIA_LOCATON ? JSON.parse(process.env.NUXT_PUBLIC_PIZZERIA_LOCATON) : ''
        }
    },
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
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
            link: [{rel: 'icon', type: 'image/png', href: '/favicon.png'}],
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
    css: ['~/app/assets/styles/reset.css'],
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
