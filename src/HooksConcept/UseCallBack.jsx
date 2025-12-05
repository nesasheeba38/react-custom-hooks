import { useCallback, useState } from "react"
import { Child } from "./Child"

export const UseCallBack=()=>{
    const[count,setCount]=useState(0)

    const handleClick=useCallback(()=>{
        console.log("clicked")
    },[]);
    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <Child clicking={handleClick}/>
        </>
    )
}