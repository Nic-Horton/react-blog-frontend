import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Blog() {
  const {id} = useParams();
  const [blog,setBlog] = useState(null)

  useEffect(() => {
    // Fetch the individual blog post using the id
    fetch(`http://localhost:3001/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div> 
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  )
}

export default Blog