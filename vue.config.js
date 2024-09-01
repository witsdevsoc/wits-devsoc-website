module.exports = {
  // transpileDependencies: true,
  publicPath: '/devsoc/',
  devServer: {
    proxy: 'http://localhost:3001'
  }
};
