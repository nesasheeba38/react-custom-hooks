import { useEffect, useState } from "react"

export const UseEffectConcept=()=>{

  const[counter1,setCounter1]=useState(0)
  const[counter2,setCounter2]=useState(0)


  //type 1:Execute on render and all state change
  useEffect(()=>{
    console.log("Excute Render");
  });

  //type 2:Execute on render on dependency state change
    // useEffect(()=>{
    //   console.log("Execute render")
    // },[counter2]);
  
  //type 3:Execute on render(run only once)
  // useEffect(()=>{
  //   console.log("Execute on render");
  // },[])

    
  return(
    <>
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>
      <button onClick={()=>setCounter1(counter1+1)}>increment1</button>
      <button onClick={()=>setCounter2(counter2+1)}>increment2</button>
    </>
  )
}