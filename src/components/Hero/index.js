import React from 'react'


export default function Hero({ blogs }) {
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
      </div>
  )
}
