import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Blog from './components/Blog';
import MyNav from './components/MyNav';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import useAuthenticate from './components/useAuthenticate';

function App() {
	const { isLoggedIn, login, logout } = useAuthenticate();

	return (
		<div className="App">
			<MyNav isLoggedIn={isLoggedIn} logout={logout} />
			<Routes>
				<Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blogs/:id" element={<Blog />} />
				<Route path="/create" element={<CreateBlog />} />
				<Route path="/login" element={<Login onLogin={login} />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
