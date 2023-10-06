import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Blog from './components/Blog';
import MyNav from './components/MyNav';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';

function App() {
	return (
		<div className="App">
			<MyNav />
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<h1>Home Page</h1>

							<Link to={'/blogs'}>
								<button>See all Blogs</button>
							</Link>
							<Link to={'/create'}>
								<button>Create a Blog Post</button>
							</Link>
						</div>
					}
				/>
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blogs/:id" element={<Blog />} />
				<Route path="/create" element={<CreateBlog />} />
			</Routes>
		</div>
	);
}

export default App;
