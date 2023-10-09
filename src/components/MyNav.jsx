import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function MyNav() {
  return (
  <nav>  
    <Link to={"/"}>Home</Link>
    <Link to={"/blogs"}>Blogs</Link>
    <Link to={'/create'}>Create</Link>
    <Link to={'/login'}>Login</Link>
    <Link to={'/register'}>Register</Link>
    <Logout/>
  </nav>
  )
}

export default MyNav