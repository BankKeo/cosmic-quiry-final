const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/**", { target: "https://blogcq.herokuapp.com" })
  );
  app.use(
    createProxyMiddleware("/otherApi/**", {
      target: "https://blogcq.herokuapp.com",
    })
  );
};
