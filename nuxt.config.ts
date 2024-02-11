// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/scss/style.scss"],

    vite: {
        define: {
            "process.env.DEBUG": false,
        },
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
    ssr: true,
});
