import { useEffect, useState } from 'react'

function useAuthenticate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

	useEffect(() => {
		fetch('http://localhost:3001/authenticate', {credentials:'include'})
			.then((res) => res.json())
			.then((data) => {
        if(data.isLoggedIn === true){
          //setIsLoggedIn(data.isLoggedIn);
          setUser(data.user)
        } else {
          //setIsLoggedIn(false);
          setUser(null)
        }
			});
	}, [isLoggedIn]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser('');
    setIsLoggedIn(false);
  };

  return {isLoggedIn, login, logout, user};
}

export default useAuthenticate