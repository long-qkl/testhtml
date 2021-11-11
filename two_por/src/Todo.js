// import { Component } from 'react';
import React from 'react';
import './CSS/Todo.min.css';
import bgimg from './images/122.jpg';
import Input from './Input';
import Lists from './Lists';

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lists:['12','32','fr'],
            finishList:[12,3],
            inputVal:'',

        }
        this.onput=this.onput.bind(this)
        this.onsub=this.onsub.bind(this)
        this.getcl=this.getcl.bind(this)
    }
    // 组件Input中的input框调用的方法
    onput(e){
        this.setState({
            inputVal: e.target.value
        })
    }
    // 组件Input中的button框调用的方法
    onsub(e){
        //添加输入的数据到开头
        // lists.unshift()
        if(this.state.inputVal){
            this.setState({
                lists: [this.state.inputVal,...this.state.lists],
                inputVal:''
            })
        }else{
            console.log("输入为空哦！")
        }
        e.preventDefault();//阻止默认事件
    }

    //点击列表中的待办事件
    //得搞定父子组件传参，函数式父子组件传参
    getcl(){
        console.log("点击了列表中的待办事件")
    }
    
    render(){
        return(
            <div className="bbg">
                <img src={bgimg} alt="图片接收失败"></img>
                <div className="sub">
                    <Input onsub={this.onsub} onput={this.onput} inputVal={this.state.inputVal} />
                    <span>任务列表</span>
                    <div>
                        <ul>
                            <li>
                                <span>待办</span>
                                <Lists lists={this.state.lists} getcl={this.getcl}></Lists>
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