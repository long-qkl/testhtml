# 反向代理：http-proxy-middleware
在`src`目录下创建一个`setupProxy.js`的文件

`npm install http-proxy-middleware --save`

内容如下：

```javascript
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```
# 路由
`npm i react-router-dom --save`

# json-server
模拟接口
`npm install -g json-server`
## 接口启动命令
`json-server --watch ./test.json --port 8000`
增删改查等操作可去 `home.js` 里面看