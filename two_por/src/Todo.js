// import { Component } from 'react';
import React from 'react';
import './CSS/Todo.min.css';
import bgimg from './images/122.jpg';

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
        const todolists=this.state.lists.map((list,index)=>{
            return <li key={index}>{list}</li>
        });
        console.log(this.state.finishList);
        const finishList=this.state.finishList;
        const finishlists=finishList.map((list,index)=>{
            // return <li key={index}>{list}</li>
            if(this.state.finishList){
                return <li key={index}>{list}</li>
            }else{
                return <li>nothing</li>
            }
        })
        return(
            <div className="bbg">
                <img src={bgimg} alt="图片接受失败"></img>
                <div className="sub">
                    <span>任务列表</span>
                    <div>
                        <ul>
                            <li>
                                <span>待办</span>
                                <div className="lists">
                                    <ul>
                                        {todolists}
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span>已办</span>
                                <div className="lists">
                                    <ul>
                                        {finishlists}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }

}

export default Todo;