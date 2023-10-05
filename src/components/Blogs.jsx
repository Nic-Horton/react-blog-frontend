import React,{useEffect, useState}from 'react'
import {Link } from 'react-router-dom'

function Blogs() {
  const url = "http://localhost:3001/blogs";
  const [blogs,setBlogs] = useState([]);
  
  const fetchBlogs = () => {
    return fetch(url).then((res)=>res.json()).then((d)=>setBlogs(d))
  }

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <>
    <h1>Blog List
      <br />
    </h1>

    <ul>
    {blogs.map((blog) => {
      return (<li key={blog.id}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></li>)
    })}
    </ul>

    </>
  )
}

export default Blogs