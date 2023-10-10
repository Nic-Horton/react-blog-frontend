import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments';
import CreateComment from './CreateComment';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'

function Blog() {
  const {id} = useParams();
  const [blog,setBlog] = useState(null);
  const [showComments, setShowComments] = useState(false);
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

  const toggleElements = () => {
    setShowComments(!showComments);
  };

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

      <Button variant="contained" color="primary" onClick={toggleElements}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </Button>
      {showComments && (
      <Paper sx={{display: { md: 'flex' }}} elevation={2}>
      <Comments comments={comments} blogId={id} onCommentAdded={handleAdded}/>
      <Divider orientation="vertical" variant="middle" flexItem />
      <CreateComment blogId={id} onCommentAdded={handleAdded}/>
      </Paper>
      )}
    </div>
    
  )
}

export default Blog