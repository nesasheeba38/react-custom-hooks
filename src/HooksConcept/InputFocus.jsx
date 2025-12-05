import { useEffect, useRef } from "react"

export const InputFocus=()=>{
    const textRef=useRef()

    useEffect(()=>{
        textRef.current.focus()
    },[])
    return(
        <>
        <input ref={textRef}/>
        </>
    )
}