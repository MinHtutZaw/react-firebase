import React, { useState } from 'react'


export default function Hero({ blogs, setShowblogs }) {
  let [newblogs,setnewblogs] =useState("")



  return (
  
    <div>
      <h1>Blogs</h1>
      {blogs.length > 0 ?
        (blogs.map((blog) => (

          <li key={blog.id}>
            {blog.id} - {blog.author}


          </li>
        ))
        )
        : (
          <p>No Blogs available</p>
        )}
             {/* Input field */}
      <input
        type="text"
        placeholder="Enter blog author"
        value={newblogs}
        onChange={(e) => setnewblogs(e.target.value)}
      />

      <button onClick={() => setShowblogs(false)}> Hide blogs  </button>
      <button onClick={() => console.log(newblogs)} >Add New Blog</button>
    </div>
  )
}
