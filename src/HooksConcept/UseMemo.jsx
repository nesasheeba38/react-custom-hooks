import { useState,useMemo} from "react"

export const UseMemo=()=>{

  const[count,setCount]=useState(0)
  const[todos,setTodos]=useState([])

  const calculation=useMemo(()=>{
    return expensiveCalculation(count)
  },[count]);

  const increaseCount=()=>{
    setCount(count+1)
  }
  const addTodo=()=>{
    setTodos([...todos,"New Todo"])
  }
  return(
    <>
    <h3>TODO</h3>
    <ul>
      {todos.map((todo,index)=>{
        return <li key={index}>{todo}</li>
      })}
    </ul>
    <button onClick={addTodo}>ADD Todo</button>
    <h1>Increase Count</h1>
    <h1>count value :{count}</h1>
    <button onClick={increaseCount}>Count Increase</button>
    <h3>Calculation :{calculation}</h3>
    </>
  )
}

const expensiveCalculation=(num)=>{
  console.log("Excute rendering")
 for(let i=0;i<1000000000;i++) {
  num+2
 }
 return num;
}