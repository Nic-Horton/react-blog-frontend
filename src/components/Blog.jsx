import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments';
import CreateComment from './CreateComment';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Blog({user}) {
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
      <Typography
          component="h2"
          variant="h2"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, mt: 3, mb: 3}}
        >
          {blog.title}
      </Typography>
      <Typography
          component="h5"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, mt: 3, mb: 3}}
        >
          By: {blog.User.username}
      </Typography>
      <Typography align="left" variant="subtitle1" paragraph sx={{pl:6, pr:6, ml:2, mr:2}}>
      {blog.content}
      </Typography>

      
      {showComments && (
      <Paper sx={{display: { md: 'flex' }}} elevation={2}>
      <Comments comments={comments} user={user} blogId={id} onCommentAdded={handleAdded}/>
      <Divider orientation="vertical" variant="middle" flexItem />
      <CreateComment blogId={id} onCommentAdded={handleAdded}/>
      </Paper>
      )}
      <br/>
      <Button variant="contained" color="primary" onClick={toggleElements}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </Button>
    </div>
    
  )
}

export default Blog