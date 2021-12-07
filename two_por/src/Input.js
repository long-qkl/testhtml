import './CSS/Input.min.css'
import React from "react"

class Input extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render() {
        return (
            <div>
                <label>请输入：</label>
                <input
                    type="text"
                    className="shuru"
                    value={this.props.inputVal}
                    onChange={this.props.onput}
                    placeholder="请输入待办事件"
                    onKeyUp={this.props.inputKeyup}
                />
                &nbsp;
                <button onClick={this.props.onsub}>提交</button>
            </div>
        );
    }
}

export default Input;