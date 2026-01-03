
import { useState } from 'react';
import './App.css';
import Img from './assets/img.png'

function App() {
  let [world,setworld] = useState("World")
  let change =()=>{
    setworld("React")
  }


  return (
    <>
      <h1>Hello {world}</h1>
      <button onClick={change}>Changes</button>

    </>
  );
}

export default App;
