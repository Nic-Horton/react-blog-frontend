import './App.css';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import MyNav from './components/MyNav';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import useAuthenticate from './components/useAuthenticate';
import YourBlogs from './components/YourBlogs';
import YourComments from './components/YourComments';

function App() {
	const { isLoggedIn, login, logout, user } = useAuthenticate();

	return (
		<div className="App">
			<MyNav isLoggedIn={isLoggedIn} logout={logout} />
			<Routes>
				<Route
					path="/"
					element={<HomePage isLoggedIn={isLoggedIn} user={user} />}
				/>
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blogs/:id" element={<Blog user={user} />} />
				<Route
					path="/create"
					element={isLoggedIn ? <CreateBlog /> : <HomePage />}
				/>
				<Route
					path="/your-blogs"
					element={isLoggedIn ? <YourBlogs /> : <HomePage />}
				/>
				<Route
					path="/your-comments"
					element={isLoggedIn ? <YourComments /> : <HomePage />}
				/>
				<Route path="/login" element={<Login onLogin={login} />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
