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