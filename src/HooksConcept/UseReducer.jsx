import { useReducer } from "react"

export const UseReducer=()=>{


    const counterReducer=(state,action)=>{
        switch(action.type){
        case "Increase":
        return{count:state.count+1};
        case "Decrease":
        return{count:state.count-1};
        case "Reset":
        return{count:0};
        default:
        return state;
        }
    }

    const[state,dispatch]=useReducer(counterReducer,{count:0})
    return(
        <>
         <h1>Count value :{state.count}</h1>
         <button onClick={()=>{dispatch({type:"Increase"})}}>increment +</button>
         <button onClick={()=>{dispatch({type:"Decrease"})}}>Decrement -</button>
         <button onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>
        </>
    )
} 
