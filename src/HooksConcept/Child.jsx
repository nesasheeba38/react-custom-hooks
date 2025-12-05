import React from "react"

export const Child=React.memo(({clicking})=>{
    console.log("child re-rendered")
    return(
        <>
          <button onClick={clicking}>child button</button>
        </>
    )
})