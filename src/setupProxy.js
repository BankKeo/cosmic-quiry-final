import * as express from "express";
import {
  createProxyMiddleware,
  Filter,
  Options,
  RequestHandler,
} from "http-proxy-middleware";

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://blogcq.herokuapp.com",
    changeOrigin: true,
  })
);
app.listen(3000);
