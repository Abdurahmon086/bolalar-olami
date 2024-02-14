// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["nuxt-swiper"],
    css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/scss/style.scss"],

    app: {
        head: {
            link: [
                {
                    href: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.min.css",
                    rel: "stylesheet",
                },
            ],
            script: [
                {
                    type: "text/javascript",
                    src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.umd.min.js",
                },
            ],
        },
    },
    runtimeConfig: {
        baseUrl: process.env.BASE_URL
    },
    ssr: true,
});
