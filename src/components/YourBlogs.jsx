import React,{useEffect, useState}from 'react'
import {Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import UpdateBlog from './UpdateBlog';

function YourBlogs() {
  const [blogs,setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/user/blogs", {credentials:'include'})
    .then((res)=>res.json())
    .then((d)=>{
      setBlogs(d)
    })
}, [])

  const _deleteBlog = (id) =>{
    fetch(`http://localhost:3001/blogs/${id}`,{credentials:'include', method: 'DELETE'})
    .then((res) => res.json())
		.then((data) => {
      const updatedBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(updatedBlogs);
		});
  }

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
                 
               </CardContent>
             </Card>
           </CardActionArea>
           <div sx={{display:'flex', alignItems: 'center'}}>
            <Button onClick={()=> {_deleteBlog(blog.id)}} variant='contained' sx={{bgcolor: 'error.main', color:'white', '&:hover': {bgcolor: 'error.light', }}}>
              Delete
            </Button>
            <UpdateBlog id={blog.id} content={blog.content} title={blog.title}/>
            </div>
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
          Your Blogs
      </Typography>
      <Grid container spacing={4}>
        <CardJSX/>
      </Grid>
    </Container>
  );
}

export default YourBlogs