module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  devServer: {
    proxy: {
      '/api': {
        target: 'https://unisearchapi-demo.herokuapp.com',
        changeOrigin: false,
        pathRewrite: {
          '^/api': ''
        }
      }

    }
  }
}
