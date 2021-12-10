import React,{Component} from "react";
import './Test.css';

export default class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            val:"2345",
            num: 0
        }
    }
    componentDidCatch(){
        console.log("componentDidCatch","1")
        this.updatas()
    }
    componentDidMount(){
        this.updatas()
        console.log("componentDidMount","2")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate","3")
        // this.updatas()
    }
    componentWillUnmount(){
        console.log("componentWillUnmount","4")
        // this.updatas()
    }

    updatas=()=>{
        let num1=this.state.num
        this.setState({
            num: num1+1
        })
    }


    render(){
        return(
            <div onClick={this.updatas} className="one">{this.state.val}</div>
        )
    }
}
