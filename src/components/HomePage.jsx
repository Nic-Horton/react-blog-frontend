import React from 'react'

function HomePage({isLoggedIn, user}) {
  return (
    <div>
			<h1>Home Page</h1>
			<h3>{isLoggedIn ? (user ? `Hello ${user}` : '')  : ''}</h3>	
		</div>
  )
}

export default HomePage