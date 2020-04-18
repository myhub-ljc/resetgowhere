module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'views': '@/views'
      }
    }
  }
}