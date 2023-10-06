import React from 'react'


function CreateComment({blogId}) {

  const _submitHandler = (e) => {
    fetch(`http://localhost:3001/new/comment/${blogId}`,{ method: 'POST', 
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify({
      message: e.target.message.value
    })
  }).then((res) => res.json()).then((data) => {
    if (data.error) {
      return alert('Please try again. Error occurred');
    } else if (data) {
      alert('Comment Posted!');
      e.target.message.value = '';
    }
  })
  }
  
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault(); _submitHandler(e)}}>
        <label htmlFor='message'><h3>Add Comment</h3></label>
        <textarea name='message' cols='30' rows='4' required/>
        <br />
        <button type='submit'>Add comment</button>
      </form>
    </div>
  )
}

export default CreateComment