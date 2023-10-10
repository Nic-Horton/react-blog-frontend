import React from 'react'

function HomePage({isLoggedIn, user}) {
  return (
    <div>
			<h1>Home Page</h1>
			<h3>{isLoggedIn ? (`Hello ${user}`)  : 'Welcome!'}</h3>	
		</div>
  )
}

export default HomePage