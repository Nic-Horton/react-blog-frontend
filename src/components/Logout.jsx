import React from 'react'
import { Button } from '@mui/material';

function Logout({logout}) {

  const _clickHandler = () =>  {
    fetch('http://localhost:3001/logout', {credentials:'include'}).then((res) => res.json())
    logout();
  }

  return (
    <Button sx={{textDecoration: 'none',color: 'red'}} onClick={_clickHandler}>logout</Button>
  )
}

export default Logout