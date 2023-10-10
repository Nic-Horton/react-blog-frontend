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

function Login({onLogin}) {
  const navigate = useNavigate();

  const _handleSubmit = (e) =>{
    e.preventDefault();

    fetch('http://localhost:3001/login',{ method: 'POST', credentials:'include',
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify({
      username: e.target.email.value,
      password: e.target.password.value,
    })
  }).then((res) => res.json()).then((data) => {
    if (data.error) {
      return alert('Please try again. Error occurred');
    } else if (data) {
      alert('Logged In!');
      onLogin();
      e.target.email.value = '';
      e.target.password.value = '';
      navigate("/");
      window.location.reload();
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
            Sign In
          </Typography>
          <Box component="form" onSubmit={_handleSubmit} sx={{ mt: 1 }}>
            <TextField
              type='text'
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email or Username"
              name="email"
              autoComplete='off'
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs color={'blue'}>
                <Link to={'/register'} style={{color:'blue'}}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}

export default Login