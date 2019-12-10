module.exports = {
  // 打包基础路径
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  // 打包文件夹
  outputDir: "dist",

  // 静态文件
  assetsDir: "static",

  // 生产环境 sourceMap
  productionSourceMap: false,

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
