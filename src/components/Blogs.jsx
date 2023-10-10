import React,{useEffect, useState}from 'react'
import {Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

function Blogs() {
  const [blogs,setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
    .then((res)=>res.json())
    .then((d)=>setBlogs(d))
  }, [])

const CardJSX = () =>{
   return blogs.map((blog) =>{
      return (
        <Grid item xs={12} md={6} key={blog.id}>
          <CardActionArea component={Link} to={`/blogs/${blog.id}`} >
            <Card sx={{ display: 'flex', bgcolor: 'primary.light'}}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {blog.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  By: {blog.User.username}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      )
    })
  }

  return (
    <Container maxWidth="lg">
      <Typography
          component="h2"
          variant="h2"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          mt={3}
          mb={3}
        >
          Blogs
      </Typography>
      <Grid container spacing={4}>
        <CardJSX/>
      </Grid>
    </Container>
  );
}

export default Blogs