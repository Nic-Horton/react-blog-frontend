import React from 'react'
import { Link } from 'react-router-dom'

function MyNav() {
  return (
  <nav>  
    <Link to={"/"}>Home</Link>
    <Link to={"/blogs"}>Blogs</Link>
  </nav>
  )
}

export default MyNav