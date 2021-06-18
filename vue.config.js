module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gtplay/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "GTPLAY";
        return args;
      })
  }
};
