module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  chainWebpack(config) {
    // 更改title
    config.plugin("html").tap(args => {
      args[0].title = "博客";
      return args;
    });
  },
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://koa.site.blueflyming.cn",
        // target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
};
