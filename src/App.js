
import { useState } from 'react';
import './App.css';
import Img from './assets/img.png'

function App() {
  let [world, setworld] = useState("World")
  let change = () => {
    setworld("React")
  };

  let [blogs, setBlogs] = useState([
    { 'id': 1, 'author': 'leo' },
    { 'id': 2, 'author': 'leon' }


  ]);


  return (
    <>
      <h1>Hello {world}</h1>
      <button onClick={change}>Changes</button>

      <div>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.id} - {blog.author}
          </li>
        ))}
      </div>

    </>
  );
}

export default App;
