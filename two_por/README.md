# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 粒子插件
`npm install react-canvas-nest`

```javascript
import ReactCanvasNest from 'react-canvas-nest'

<ReactCanvasNest
    className='canvasNest'
    config={{
        pointColor: ' 255, 255, 255 ',
        lineColor: '255,255,255',
        pointOpacity: 0.5,
        pointR: 2,
        count:100
    }}
    style={{ zIndex: 1 }}
/>
```

后续再改，想办法把mongodb塞进去