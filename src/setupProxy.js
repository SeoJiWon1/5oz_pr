// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    "http://localhost:8080/me/login", 
    createProxyMiddleware({
      target: '//http://localhost:8080',
      changeOrigin: true,
    })
  );
};