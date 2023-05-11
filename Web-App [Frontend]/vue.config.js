const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: "http://localhost:8080",
    port: 8081
  },
  transpileDependencies: [
    'vuetify'
  ]
})
