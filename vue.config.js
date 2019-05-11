// vue.config.js vue 项目配置文件

module.exports = {
  // 基本路径 baseUrl
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    port: 4000,
    // wifi地址
    host: '127.0.0.1',
    // 跨域请求
    // proxy: {
    //   'http://127.0.0.1:5000': {
    //     target: 'http://127.0.0.1:5000',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
