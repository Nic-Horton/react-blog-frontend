import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

function Comments({comments,user}) {

  const ListJSX = () =>{
    return comments.map((comment) => {
      return (
        <div key={comment.id}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AccountCircle />
        </ListItemAvatar>
        <ListItemText
          primary={ comment.User ? (comment.User.username ? comment.User.username : user) : user}
          secondary={comment.message}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </div>)
    })
  }

  return (
    <Box sx={{width: {md:'60%'} }}>
    <Typography
    component="h4"
    variant="h4"
    color="inherit"
    align="center"
    noWrap
    sx={{ flex: 1 , pt:2, position:'sticky'}}
    >
    Comments
    </Typography>
    <List sx={{ width: '100%', maxWidth:'sm' , m:'auto', bgcolor: 'background.paper'}} style={{maxHeight: 200, overflow: 'auto'}} >
      <ListJSX/>
    </List>
    </Box>
  );
}

export default Comments