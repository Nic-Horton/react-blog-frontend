import React from 'react'

function Comments({comments}) {


  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment)=>{
          return (<li key={comment.id}>{comment.message}</li>)
        })}
      </ul>
      
    </div>
  )
}

export default Comments