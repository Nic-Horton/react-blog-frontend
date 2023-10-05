import React, { useEffect, useState } from 'react'

function Comments({blogId}) {
  const [comments,setComments] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3001/comments/${blogId}`)
    .then((res)=>res.json())
    .then((data)=>setComments(data))
  }, [blogId])

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