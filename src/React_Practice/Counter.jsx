import React, { Component } from "react";
 export class Counter extends React.Component{

    constructor(){
        super(); 
        this.state={
        counter:0
        }
    }
    HandleClick=()=>{
        this.setState(({counter})=>({
        counter:counter+1
        }))
    }
    render(){
        return(
            <div>
            <h1>Count:{this.state.counter}</h1>
            <button onClick={this.HandleClick.bind(this)}>Increment</button>
            </div>
        )
    }
}
