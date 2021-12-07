import React from 'react';
import './CSS/Lists.min.css'

class Lists extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        let lists=this.props.lists;
        let getcl=this.props.getcl;
        let name=this.props.name;
        // console.log(name,"按钮")
        //遍历
        const lis=lists.length ? lists.map((list,index)=>{
            // return <li key={index}><span>{list}</span><button>完成</button></li>
            // return (<li key={index} onClick={oncl} >{list}</li>)
            // let upcl=this.upcl
            
                return (<li key={index} >
                        <h3>{list}</h3>
                        <h3 onClick={getcl} idx={index}>{name}</h3>
                    </li>)
        }) : <li>nothing</li>
        return(
            <div id="lists">
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}

export default Lists;