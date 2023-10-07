import React from 'react'
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Register</h1>
      <form onSubmit={(e)=>{_handleSubmit(e)}}>
        <label htmlFor="username">Enter Username: </label>
        <input name="username" type="text" />
<br />
        <label htmlFor="email">Enter email: </label>
        <input name="email" type="email" />
<br />
        <label htmlFor="password">Enter Password: </label>
        <input name="password" type="password" />
<br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register