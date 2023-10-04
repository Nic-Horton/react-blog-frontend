import React,{useEffect, useState}from 'react'
import { Link, useParams } from 'react-router-dom'

function Blog() {
  const url = "http://localhost:3001/blogs";
  const [blogs,setBlogs] = useState([]);
  
  const fetchBlogs = () => {
    return fetch(url).then((res)=>res.json()).then((d)=>setBlogs(d))
  }

  useEffect(() => {
    document.title = "Blogs"
    fetchBlogs();
  }, [])

  const Blogs = ()=>{
    return(<ul>
    {blogs.map((blog) => {
      return (<Link to={`/blogs/${blog.id}`}><li>{blog.title}</li></Link>)
    })}
    </ul>) 
  }

  const { blogId } = useParams();
  console.log(blogId)

  return (
    <>
    <h1>Blog List
      <br />
      Viewing: {blogId}
    </h1>

    <Blogs/>
    
    <Link to="/">Home</Link>
    <Link to="/blogs">All Blogs</Link>
    </>
  )
}

export default Blog