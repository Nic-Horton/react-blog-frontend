import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments';
import CreateComment from './CreateComment';

function Blog() {
  const {id} = useParams();
  const [blog,setBlog] = useState(null)
  const [comments, setComments] = useState([]);

  // Fetch the individual blog post using the id
  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
    fetch(`http://localhost:3001/comments/${id}`)
      .then((res)=>res.json())
      .then((data)=>setComments(data))
  }, [id]);

  const handleAdded = (newComment) => {
    setComments([...comments, newComment])
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div> 
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <hr />
      <Comments comments={comments}/>
      <hr />
      <CreateComment blogId={id} onCommentAdded={handleAdded}/>
    </div>
    
  )
}

export default Blog