module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    port: 8080
  },
  lintOnSave: false,
//   //   chain 链
// //   判断是发布模式还是开发模式
//   chainWebpack: config => {
//     // 发布模式
//     config.when(process.env.NODE_ENV === 'production', config => {
//       config.entry('app').clear().add('./src/main-prod.js'),
//         config.set('externals', {
//           vue: 'Vue',
//           'vue-router': 'VueRouter',
//           axios: 'axios',
//           lodash: '_',
//           echarts: 'echarts',
//           nprogress: 'NProgress',
//           'vue-quill-editor': 'VueQuillEditor'
//         },
//         config.plugin('html').tap(args => {
//           args[0].isProd = true
//           return args
//         }))
//     })
//     // 开发模式
//     config.when(process.env.NODE_ENV === 'development', config => {
//       config.entry('app').clear().add('./src/main-dev.js')
//       config.plugin('html').tap(args => {
//         args[0].isProd = false
//         return args
//       })
//     })
//   }
}
