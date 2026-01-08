
import { useState } from 'react';
import './App.css';
import Img from './assets/img.png'
import Hero from './components/Hero';


function App() {


  let [blogs, setBlogs] = useState([
    { 'id': 1, 'author': 'leo' },
    { 'id': 2, 'author': 'leon' }


  ]);
  

  return (
    <>
     

      <Hero blogs ={blogs}/>

    </>
  );
}

export default App;



