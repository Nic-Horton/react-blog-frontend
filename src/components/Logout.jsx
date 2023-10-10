import React from 'react'
import { Button, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

function Logout({logout,handleCloseUserMenu}) {

  const _clickHandler = () =>  {
    fetch('http://localhost:3001/logout', {credentials:'include'}).then((res) => res.json())
    logout();
  }

  return (
    <MenuItem component={Link} to={'/'} onClick={()=>{handleCloseUserMenu(); _clickHandler()}}>
      <Button sx={{textDecoration: 'none',color: 'red'}}>logout</Button>
    </MenuItem>
  )
}

export default Logout