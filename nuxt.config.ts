import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    pages: true,
    // spaLoadingTemplate: "~/layouts/loading.vue",
    modules: ["@nuxtjs/i18n", "@pinia/nuxt"],
    css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/scss/style.scss"],
    i18n: {
        lazy: false,
        langDir: "locales",
        strategy: "prefix_except_default",
        locales: [
            {
                code: "en",
                iso: "en",
                name: "English(US)",
                file: "en-US.json",
            },
            {
                code: "uz",
                iso: "uz",
                name: "Uzbek(UZ)",
                file: "uz-UZ.json",
            },
            {
                code: "ru",
                iso: "ru",
                name: "Russin(RU)",
                file: "ru-RU.json",
            },
            {
                code: "kr",
                iso: "kr",
                name: "Uzbek-kril(UZK)",
                file: "uzk-UZK.json",
            },
        ],
        defaultLocale: "uz",
    },
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
        baseUrl: process.env.BASE_URL,
    },
    ssr: true,
});
