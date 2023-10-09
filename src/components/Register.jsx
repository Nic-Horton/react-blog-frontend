import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link style={{color:'blue'}} to={'/'}>
        React-O-Blog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Register() {
  const navigate = useNavigate();

  const _handleSubmit= (e) =>{
    e.preventDefault();
    fetch('http://localhost:3001/register',{ method: 'POST', 
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify({
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    })
  }).then((res) => res.json()).then((data) => {
    if (data.error) {
      return alert('Please try again. Error occurred');
    } else if (data) {
      alert('Registered!');
      e.target.username.value = '';
      e.target.email.value = '';
      e.target.password.value = '';
      navigate("/login");
    }
  })
  }

return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={_handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type='text'
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='email'
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item xs>
            <Link to={'/login'} style={{color:'blue'}}>
                  Already have an account? Sign in
                </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
);
}

export default Register