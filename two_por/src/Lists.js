import './CSS/Lists.min.css'

function Lists(props) {
    var lists=props.lists;
    console.log(lists,"sdgeg1")
    const lis=lists.length ? lists.map((list,index)=>{
        return <li key={index}>{list}</li>
    }) : <li>nothing</li>
    return(
        <div id="lists">
            <ul>
                {lis}
                {/* <li>1231234</li> */}
            </ul>
        </div>
    )
}

export default Lists;