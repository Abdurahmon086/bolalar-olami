import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "../images/favicon.ico",
                },
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
            title: "Bolalar olami sitega xush kelibsiz",
            meta: [
                {
                    name: "Bolalar Olami - yangiliklardan bohabar bo'ling",
                    content: "Yangiliklardan bohabar bo'ling",
                },
            ],
        },
    },
    site: {
        url: "https://new.bolalarolami.uz",
        name: "Bolalarolami.uz",
        description:
            "Bolalar olamiga oid barcha yangiliklar bizda ! Yangiliklar , salomatlik , huquqiy klinika , xayriya , adabiyot , foydaliga oid malumotlardan xabardor bo'ling ",
        defaultLocale: "uz",
        trailingSlash: true,
    },
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    modules: ["@nuxtjs/i18n", "@pinia/nuxt", "nuxt-swiper", "@ant-design-vue/nuxt", "@nuxtjs/seo", "nuxt-og-image", "@nuxt/image"],
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
        port: 3003,
    },
    runtimeConfig: {
        baseUrl: process.env.BASE_URL || "https://admin.bolalarolami.uz/api/v2",
    },
    image: {
        quality: 80,
        format: ["webp"],
    },
});
