
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
  let deleteBlog = (id) => {
    setBlogs((prevState) => prevState.filter(blog => blog.id != id))

  }


  return (
    <>
      <h1>Hello {world}</h1>
      <button onClick={change}>Changes</button>

      <div>
        <h1>Blogs</h1>
        {blogs.length > 0 ?
          (blogs.map((blog) => (
            <li key={blog.id}>
              {blog.id} - {blog.author}
              <button onClick={() => deleteBlog(blog.id)}>Delete button </button>
            </li>
          ))
          )
          : (
            <p>No Blogs available</p>
          )}
      </div>

    </>
  );
}

export default App;



