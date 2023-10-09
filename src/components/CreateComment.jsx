import React from 'react'


function CreateComment({blogId, onCommentAdded}) {

  const _submitHandler = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/new/comment/${blogId}`,{ method: 'POST', credentials:'include',
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify({
      message: e.target.message.value
    })
  }).then((res) => res.json()).then((data) => {
    if (data.error) {
      return alert('Please log in');
    } else if (data) {
      alert('Comment Posted!');
      e.target.message.value = '';

      if(onCommentAdded){
        onCommentAdded(data);
      }
    }
  })
  }
  
  return (
    <div>
      <form onSubmit={(e)=>{_submitHandler(e)}}>
        <label htmlFor='message'><h3>Add Comment</h3></label>
        <textarea name='message' cols='30' rows='4' required/>
        <br />
        <button type='submit'>Add comment</button>
      </form>
    </div>
  )
}

export default CreateComment