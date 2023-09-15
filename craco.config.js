const { NODE_ENV } = process.env;

module.exports = {
  webpack: {
    configure: webpackConfig => {
      if (NODE_ENV === 'production') {
        webpackConfig.output.publicPath = './';
      }
      return webpackConfig;
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:50002',
        changeOrigin: true,
        pathRewrite: {
          // "^/api": "",
        },
      },
    },
  },
};
