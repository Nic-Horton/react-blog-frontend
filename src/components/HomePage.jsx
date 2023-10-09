import React from 'react'

function HomePage({isLoggedIn}) {
  return (
    <div>
			<h1>Home Page</h1>
			<h3>{isLoggedIn ? `Hello account holder` : ''}</h3>	
		</div>
  )
}

export default HomePage