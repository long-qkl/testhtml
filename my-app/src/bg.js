import React from 'react'
import "./bg.css"
// import ReactCanvasNest from 'react-canvas-nest'
import ReactCanvasNest from 'react-canvas-nest'

export default function bg() {
    return (
        <div className='bg'>
            {/* <img src='https://long-qkl.github.io/testhtml/two_por/src/images/122.jpg' alt='无图片存在' style={{ height: 800 }}></img> */}
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
        </div>
    )
}
