import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function CreateBlog() {

  const _submitHandler = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/new/blog',{ method: 'POST', credentials:'include',
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify({
      title: e.target.title.value,
      content: e.target.content.value
    })
  }).then((res) => res.json()).then((data) => {
    if (data.error) {
      return alert('Please log in');
    } else if (data) {
      alert('Blog post has been published!');
      e.target.title.value = '';
      e.target.content.value = '';
    }
  })
  }

  // return (
  //   <div>
  //     <h1>Create a Blog Post</h1>

  //     <form onSubmit={(e)=>{e.preventDefault(); _submitHandler(e)}}>
  //       <label htmlFor="title">Enter Title: </label>
  //       <input name='title' type="text" required/>
  //       <br />
  //       <label htmlFor="content">Enter Content: </label>
  //       <textarea name='content' type="text" required/>
  //       <br />
  //       <button type='submit'> Publish</button>
  //     </form>
      
  //   </div>
  // )
  return (
    
    <Container component="main">
      <CssBaseline />
      <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, mt: 3, mb: 3}}
        >
          Create A Blog
      </Typography>
        <Box component="form" sx={{marginTop: 4}} onSubmit={_submitHandler}>
          <Grid container width={'100%'} justifyContent={'center'} spacing={2}>
          <Grid item xs={12} md={7} >
              <TextField
                label='Title'
                type='text'
                fullWidth
                required
                id="title"
                name="title"
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField
                placeholder="Enter Content"
                multiline
                fullWidth
                minRows={5}
                maxRows={8}
                required
                id="content"
                name="content"
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
                Post Blog
              </Button>
            </Grid>
          </Grid>
        </Box>
    </Container>
);
}

export default CreateBlog