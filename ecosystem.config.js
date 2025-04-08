module.exports = {
  apps: [{
    name: 'gestao-backend',
    script: 'src/server.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
}