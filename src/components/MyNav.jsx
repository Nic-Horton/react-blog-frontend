import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function MyNav({isLoggedIn, logout}) {
  return (
  <nav>  
    <Link to={"/"}>Home</Link>
    <Link to={"/blogs"}>Blogs</Link>
    {isLoggedIn ? 
    <>
    <Link to={'/create'}>Create</Link>
    <Logout logout={logout}/>
    </>
    : 
    <>
    <Link to={'/login'}>Login</Link>
    <Link to={'/register'}>Register</Link>
    </>}
    
  </nav>
  )
}

export default MyNav