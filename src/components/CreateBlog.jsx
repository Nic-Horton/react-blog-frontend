import React from 'react'

function CreateBlog() {

  const _submitHandler = (e) => {
    fetch('http://localhost:3001/new/blog',{ method: 'POST', 
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify({
      title: e.target.title.value,
      content: e.target.content.value
    })
  }).then((res) => res.json()).then((data) => {
    if (data.error) {
      return alert('Please try again. Error occurred');
    } else if (data) {
      alert('Blog post has been published!');
      e.target.title.value = '';
      e.target.content.value = '';
    }
  })
  }

  return (
    <div>
      <h1>Create a Blog Post</h1>

      <form onSubmit={(e)=>{e.preventDefault(); _submitHandler(e)}}>
        <label htmlFor="title">Enter Title: </label>
        <input name='title' type="text" required/>
        <br />
        <label htmlFor="content">Enter Content: </label>
        <textarea name='content' type="text" required/>
        <br />
        <button type='submit'> Publish</button>
      </form>
      
    </div>
  )
}

export default CreateBlog