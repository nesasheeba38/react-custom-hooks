import { useState } from "react"

export const FunctionalComponent=()=>{

    const[count,setCount]=useState(0)


    // const UpdateCount=()=>{
    //     setCount(count+1)
    // }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        </>
    )
}