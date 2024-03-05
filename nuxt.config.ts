import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: true,
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

            title: "bolalar olami sitega xush kelibsiz",
            meta: [
                {
                    name: "Bolalar Olami - yangiliklardan bohabar bo'ling",
                    content: "Yangiliklardan bohabar bo'ling",
                },
            ],
        },
    },
    devtools: {
        enabled: true,
    },
    modules: ["@nuxtjs/i18n", "@pinia/nuxt", "nuxt-swiper", "@ant-design-vue/nuxt"],
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
    devServer: {
        port: 3003
    },
    runtimeConfig: {
        baseUrl: process.env.BASE_URL || "http://admin.bolalarolami.uz/api/v2",
    },
});
