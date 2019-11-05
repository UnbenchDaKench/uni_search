module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  devServer: {
    proxy: {
      '/api': {
        target: 'https://unisearchapi.herokuapp.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }

    }
  }
}
