import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


function UpdateBlog({id,content,title}) {
  const [open, setOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentContent, setCurrentContent] = useState(content);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    if(currentTitle === title){
      setCurrentTitle(title);
    } else {
      setCurrentTitle(currentTitle)
    }
    if(currentContent=== content){
      setCurrentContent(content);
    } else {
      setCurrentContent(currentContent)
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/blogs/${id}`,{credentials:'include', method: 'PUT',headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      title: currentTitle,
      content: currentContent,
    })
  })
    .then((res) => res.json());
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          bgcolor: 'success.main',
          color: 'white',
          '&:hover': {
            bgcolor: 'success.light',
          },
        }}
        onClick={handleOpen}
      >
        Update
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Blog Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please update the content of your blog post.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              name='title'
              id='title'
              variant="outlined"
              fullWidth
              value={currentTitle}
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
            <TextField
              label="Content"
              variant="outlined"
              name='content'
              id='content'
              fullWidth
              multiline
              rows={4}
              value={currentContent}
              onChange={(e) => setCurrentContent(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </>
  );
}

export default UpdateBlog
