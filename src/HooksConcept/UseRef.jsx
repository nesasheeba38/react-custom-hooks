import { useRef, useState } from "react"

export const UseRef=()=>{

    const[count,setCount]=useState(0)
    const counteRef=useRef(0)

    const HandleClick=()=>{
       setCount(count+1)
    }
    const HandleRef=()=>{
        counteRef.current++
        console.log("Count ref:",counteRef)
    }
    
    return(
        <>
        <h3>counter is {count}</h3>
        <h3> {`Ref is ${counteRef.current}`}</h3>
        <button onClick={HandleClick}>Increment counetr</button>
        <button onClick={HandleRef}>Increment Ref</button>
        </>
    )
}