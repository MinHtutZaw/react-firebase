
import { useState } from 'react';
import './App.css';
import Img from './assets/img.png'
import Hero from './components/Hero';


function App() {
  let [showblogs,setShowblogs] = useState(true);

  let [blogs, setBlogs] = useState([
    { 'id': 1, 'author': 'leo' },
    { 'id': 2, 'author': 'leon' }


  ]);
  

  return (
    <>

      {showblogs && <Hero blogs={blogs} setShowblogs={setShowblogs} />}

      {!showblogs && (
        <button onClick={() => setShowblogs(true)}>
          Show Blogs
        </button>
      )}

    </>
  );
}

export default App;



