import { useEffect, useState } from 'react'

function useAuthenticate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3001/authenticate', {credentials:'include'})
			.then((res) => res.json())
			.then((data) => {
        if(data.isLoggedIn === true){
          setIsLoggedIn(data.isLoggedIn);
          setUser(data.user)
        } else {
          setIsLoggedIn(false);
          setUser(null)
        }
			});
	}, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return {isLoggedIn, login, logout, user};
}

export default useAuthenticate