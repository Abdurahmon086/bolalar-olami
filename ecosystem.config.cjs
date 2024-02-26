module.exports = {
    apps: [
        {
            name: 'Bolalar-olami',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: './.output/server/index.mjs',
            args: 'start',
            port: 3000
        }
    ]
}