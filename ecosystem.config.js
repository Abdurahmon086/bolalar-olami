module.exports = {
    apps: [
        {
            name: 'BolalarOlamiPm2',
            port: 3003,
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.mjs',
            args: 'start'
        }
    ]
}
