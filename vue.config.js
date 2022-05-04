const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    compress: true,
    port: '8080',
    allowedHosts: [
      '.repl.co',
      '.stuy.world'
    ]
  },
})
