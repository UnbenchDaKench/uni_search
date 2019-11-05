module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  devServer: {
    proxy: {
      '/api': {
        target: 'http://unisearchapi.herokuapp.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }

    }
  }
}
