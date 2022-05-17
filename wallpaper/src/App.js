import './App.css';
import ReactCanvasNest from 'react-canvas-nest'

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      {/* <ReactCanvasNest
        className='canvasNest'
        config={{
          pointColor: ' 255, 255, 255 ',
          lineColor: '255,255,255',
          pointOpacity: 0.5,
          pointR: 2,
          count: 100
        }}
        style={{ zIndex: 1 }}
      /> */}
      <ReactCanvasNest />
      <span>111</span>
    </div>
  );
}

export default App;
