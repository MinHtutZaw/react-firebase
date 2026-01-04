import React, { useState } from 'react'

export default function App() {
 let [count,setCount] =useState(0)
 let increment=()=>{
  setCount((prevState)=>prevState+1)
 }
  let decrement=()=>{
  setCount((prevState)=>prevState-1)
 }

  return (
    <>
      <h1>Counter task</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
      
    </>


  )
}
