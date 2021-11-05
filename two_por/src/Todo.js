// import { Component } from 'react';
import React from 'react';
import './CSS/Todo.min.css';

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            finishList:[],
        }
    }
    

    render(){
        // const todolists=list.map(()=>{
        //     return <li>各事件</li>
        // })
        return(
            <div className="bbg">
                <img src="https://www.shijuepi.com/uploads/allimg/200918/1-20091Q10420.jpg" alt="图片接受失败"></img>
                <div className="sub">
                    <span>任务列表</span>
                    <div>
                        <ul>
                            <li>
                                <span>待办</span>
                                <div className="lists">
                                    <ul>
                                        <li>各事件</li>
                                        <li>各事件</li>
                                        <li>各事件</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span>已办</span>
                                <div className="lists">
                                    <ul>
                                        <li>各事件</li>
                                        <li>各事件</li>
                                        <li>各事件</li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li>
                                <span>代办</span>
                                <div className="lists">
                                    <ul>
                                        <li>各事件</li>
                                        <li>各事件</li>
                                        <li>各事件</li>
                                    </ul>
                                </div>
                            </li> */}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }

}

export default Todo;