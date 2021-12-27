import './CSS/Lists.min.css'

//
function Lists(props) {
    let lists=props.lists;
    let getcl=props.getcl;
    let name=props.name;
    // console.log(name,"按钮")
    //遍历
    const lis=lists.length ? lists.map((list,index)=>{
        // return <li key={index}><span>{list}</span><button>完成</button></li>
        // return (<li key={index} onClick={oncl} >{list}</li>)
        return (<li key={index} >
            <h3>{list}</h3>
            {/* 写个箭头函数把传下来的函数调用并传入参数 */}
            <h3 onClick={()=>{getcl(index)}}>{name}</h3>
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

export default Lists;