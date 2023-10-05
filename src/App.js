import './App.css';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import MyNav from './components/MyNav';
import Blogs from './components/Blogs';

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
						</div>
					}
				/>
				<Route path="/blogs/*" element={<Blogs />} />
				<Route path="/blogs/:id" element={<Blog />} />
			</Routes>
		</div>
	);
}

export default App;
