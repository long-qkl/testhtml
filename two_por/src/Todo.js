// import { Component } from 'react';
import React from 'react';
import './CSS/Todo.min.css';
import bgimg from './images/122.jpg';
import Lists from './Lists';

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lists:['12','32','fr'],
            // finishList:['333','321'],
            finishList:[],
        }
    }
    
    render(){
        // console.log(this.state.lists,"123221")
        // console.log(this.state.finishList,"123222")
        return(
            <div className="bbg">
                <img src={bgimg} alt="图片接受失败"></img>
                <div className="sub">
                    <span>任务列表</span>
                    <div>
                        <ul>
                            <li>
                                <span>待办</span>
                                <Lists lists={this.state.lists}></Lists>
                            </li>
                            <li>
                                <span>已办</span>
                                <Lists lists={this.state.finishList}></Lists>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }

}

export default Todo;