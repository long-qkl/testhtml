// import { Component } from 'react';
import React from 'react';
import './CSS/Todo.min.css';
// import bgimg from './images/122.jpg';
import Input from './Input';
import Lists from './Lists';
import ReactCanvasNest from 'react-canvas-nest'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: ['12', '32', 'fr'],
            finishList: [12, 3],
            inputVal: '',

        }
        // this.onput=this.onput.bind(this)
        // this.onsub=this.onsub.bind(this)
        // this.mvcl=this.mvcl.bind(this)
        // this.rmcl=this.rmcl.bind(this)
        // this.inputKeyup=this.inputKeyup.bind(this)
    }
    // 组件Input中的input框调用的方法
    // onput(e){
    //     this.setState({
    //         inputVal: e.target.value
    //     })
    // }
    onput = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    // 组件Input中的button框调用的方法
    onsub = (e) => {
        //添加输入的数据到开头
        // lists.unshift()
        if (this.state.inputVal) {
            this.setState({
                lists: [this.state.inputVal, ...this.state.lists],
                inputVal: ''
            })
        } else {
            console.log("输入为空哦！")
        }
        e.preventDefault();//阻止默认事件
    }

    //点击列表中的待办事件
    //得搞定父子组件传参，函数式父子组件传参
    //父传子
    mvcl = (index) => {
        // console.log(e.target.attributes.idx.value,"mvcl")
        // let idx=e.target.attributes.idx.value
        console.log(index)
        let data = this.state.lists.splice(index, 1)

        this.setState({
            lists: this.state.lists.filter((item) => {
                return item !== data
            }),
            finishList: [data, ...this.state.finishList]
        })
    }
    rmcl = (index) => {
        // console.log("点击了列表中的删除事件，彻底删除掉")
        // console.log(index,"rmcl")
        // let idx=e.target.attributes.idx.value
        let data = this.state.finishList.splice(index, 1)
        this.setState({
            finishList: this.state.finishList.filter((item) => {
                return item !== data
            })
        })
    }

    //input回车事件
    inputKeyup = (e) => {
        if (e.keyCode === 13) {
            this.onsub(e)
        }
    }

    render() {
        return (
            <div className="bbg">
                {/* <img src={bgimg} alt="图片接收失败"></img> */}
                
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
                <div className="sub" style={{ display: "none" }}>
                    
                    <Input onsub={this.onsub} onput={this.onput} inputVal={this.state.inputVal} inputKeyup={this.inputKeyup} />
                    <span>任务列表</span>
                    <div>
                        <ul>
                            <li>
                                <span>待办</span>
                                <Lists lists={this.state.lists} getcl={this.mvcl} name="完成"></Lists>
                            </li>
                            <li>
                                <span>已办</span>
                                <Lists lists={this.state.finishList} getcl={this.rmcl} name="删除"></Lists>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Todo;