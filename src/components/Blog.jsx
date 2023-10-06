import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments';

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
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>

      <Comments blogId={id} />
    </div>
  )
}

export default Blog