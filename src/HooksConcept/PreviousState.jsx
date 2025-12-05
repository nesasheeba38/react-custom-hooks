import { useEffect, useRef, useState } from "react"

export const PreviousState=()=>{

    const[inputValue,setInputValue]=useState("")
    const PrevRef=useRef("")

    useEffect(()=>{
          PrevRef.current=inputValue
    },[inputValue])
    return(
        <>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <h2>current value:{inputValue}</h2>
        <h2>Previous value:{PrevRef.current}</h2>
        </>
        
    )
}