import React from 'react'

function Logout({logout}) {

  const _clickHandler = () =>  {
    fetch('http://localhost:3001/logout', {credentials:'include'}).then((res) => res.json())
    logout();
  }

  return (
    <button onClick={_clickHandler}>logout</button>
  )
}

export default Logout