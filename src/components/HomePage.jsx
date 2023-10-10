import { Typography } from '@mui/material'
import React from 'react'

function HomePage({isLoggedIn, user}) {
  return (
    <div>
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
          Home
      </Typography>
      <Typography
          component="h5"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          mt={3}
          mb={3}
        >
          {isLoggedIn ? (`Welcome back, ${user}!`)  : 'Welcome!'}
      </Typography>
		</div>
  )
}

export default HomePage