import { useState } from "react"

export const UseStateConcept=()=>{

   const[user,setUser]=useState("sheeba")
   const updatName=()=>{
      setUser("priya")
   }
   const[count,setcount]=useState(20)
   const[UserDetails,setUserDetails]=useState({
      name:"john",
      age:20
   })
   const updateUserDetails=()=>{
      setUserDetails({...UserDetails,name:"naveen"})
   }

   const[fruits,setFruits]=useState(["apple","orange"])
   const addFruit=()=>{
      setFruits([...fruits,"mango"])
   }

   return(
      <>
      <h1>Hello {user}</h1>
      <button onClick={updatName}>click</button>
      <h1>Count:{count}</h1>
      <button onClick={()=>setcount(count-1)}>Decrease count</button>
      <h1>User Details:{UserDetails.name}</h1>
      <h1>User Details:{UserDetails.age}</h1>
      <button onClick={updateUserDetails}>Change Name</button>
      <ul>
      {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
      ))}
      </ul>
      <button onClick={addFruit}>Add Fruit </button>
      
      </>
   )
}