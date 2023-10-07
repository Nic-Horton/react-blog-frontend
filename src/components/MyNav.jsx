import React from 'react'
import { Link } from 'react-router-dom'

function MyNav() {
  return (
  <nav>  
    <Link to={"/"}>Home</Link>
    <Link to={"/blogs"}>Blogs</Link>
    <Link to={'/create'}>Create</Link>
    <Link to={'/login'}>Login</Link>
    <Link to={'/register'}>Register</Link>
  </nav>
  )
}

export default MyNav