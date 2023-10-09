import React from 'react'
import { useNavigate } from "react-router-dom";

function Login({onLogin}) {
  const navigate = useNavigate();

  const _submitHandler = (e) =>{
    e.preventDefault();

    fetch('http://localhost:3001/login',{ method: 'POST', credentials:'include',
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify({
      username: e.target.username.value,
      password: e.target.password.value,
    })
  }).then((res) => res.json()).then((data) => {
    if (data.error) {
      return alert('Please try again. Error occurred');
    } else if (data) {
      alert('Logged In!');
      onLogin();
      e.target.username.value = '';
      e.target.password.value = '';
      navigate("/");
    }
  })
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={(e)=>{_submitHandler(e)}}>
        <label htmlFor="username">Username: </label>
        <input name='username' type="text" placeholder='username or email'/>
        <br />
        <label htmlFor="password">Password: </label>
        <input name='password' type="password" />
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login