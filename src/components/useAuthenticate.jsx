import { useEffect, useState } from 'react'

function useAuthenticate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3001/authenticate', {credentials:'include'})
			.then((res) => res.json())
			.then((data) => {
        if(data.isLoggedIn === true){
          setIsLoggedIn(data.isLoggedIn);
        } else {
          setIsLoggedIn(false);
        }
			});
	}, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return {isLoggedIn, login, logout};
}

export default useAuthenticate