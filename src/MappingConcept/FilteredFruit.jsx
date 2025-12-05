import { useState } from "react"

export const FilteredFruit=()=>{

    const fruits=["apple","orange","mango","grapes"]
    const[searchText,setSearchText]=useState("")
    const filteredFruits=fruits.filter((fruit)=>fruit.toLowerCase().includes(searchText))
    
    .sort((fruit1,fruit2)=>{
        const fruit1Starts=fruit1.toLowerCase().startsWith(searchText)
        const fruit2Starts=fruit2.toLowerCase().startsWith(searchText)
        if(fruit1Starts && !fruit2Starts)return -1;
        if(!fruit1Starts && fruit2Starts)return  1;
        return 0;
    });
    return(
        <>
         <input type="text" placeholder="Search fruit" onChange={(e)=>setSearchText(e.target.value.toLowerCase())}/>
        <div>
         {filteredFruits.map((fruit, index) => (
         <div key={index} style={{ padding: "5px 0", borderBottom: "1px solid #eee" }}>{fruit}</div>
        ))}
      </div>
       
        </>
    )
}