import { Component } from "react";

export class ClassComponent extends Component{

    constructor(){
        super()
        this.state={
            count1:0,
            count2:0
        };
    };
    HandleClick(){
        this.setState({
        count1:this.state.count1 +1
    })}
    HandleClick(){
        this.setState({
        count2:this.state.count2 +1
    })}
    // componentDidMount(){
    //     console.log("data received");
    // }
    componentDidUpdate(prevProps,prevState){
      if(prevState.count1 !== this.state.count1){
        console.log("count1 changed");
    }}
    componen

    render(){
        return(
            <>
            <h1>Count1:{this.state.count1}</h1>
            <h1>Count2:{this.state.count2}</h1>
            <button onClick={()=>this.setState({count1:this.state.count1 +1})}>Count1</button>
            <button onClick={()=>this.setState({count2:this.state.count2 +1})}>Count 2</button>
            </>
        )
    }
}