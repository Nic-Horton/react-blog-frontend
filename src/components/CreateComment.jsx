import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function CreateComment({blogId, onCommentAdded}) {

  const _submitHandler = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/new/comment/${blogId}`,{ method: 'POST', credentials:'include',
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify({
      message: e.target.message.value
    })
  }).then((res) => res.json()).then((data) => {
    if (data.error) {
      return alert('Please log in');
    } else if (data) {
      alert('Comment Posted!');
      e.target.message.value = '';

      if(onCommentAdded){
        onCommentAdded(data);
      }
    }
  })
  }
  
  return (
    <Container component="main" sx={{width:{md:"40%"}}}>
      <CssBaseline />
        <Box component="form" sx={{marginTop: 4}} onSubmit={_submitHandler}>
          <Grid container width={'100%'}>
            <Grid item xs={12}>
              <TextField
                placeholder="Enter Comment"
                multiline
                fullWidth
                minRows={5}
                maxRows={5}
                required
                id="message"
                name="message"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
           Add comment
          </Button>
        </Box>
    </Container>
);
}

export default CreateComment