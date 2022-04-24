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
目前版本为react-router V6 的版本

# 登录页面的粒子特效
react-particles-js已经被弃用
`npm install react-tsparticles`
`npm install tsparticles`
```html
<Particles
  id="tsparticles"
  init={particlesInit}
  //   loaded={particlesLoaded}
  options={{
      background: {
          color: {
              value: "#0d47a1",
          },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: "push",
              },
              onHover: {
                  enable: true,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          collisions: {
              enable: true,
          },
          move: {
              direction: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  }}
/>
```

# json-server
模拟接口
`npm install -g json-server`
## 接口启动命令
`json-server --watch ./db.json --port 8000`
`json-server --watch ./three_por/src/test/db.json --port 8000`
增删改查等操作可去 `home.js` 里面看

# 启动项目
`npm run start`