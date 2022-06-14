const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://platform.test.telloport.net/',
      changeOrigin: true,
    })
  );
};