import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuggestionPage from './SuggestionPage';
import SearchPage from './SearchPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/:filmname"
					element={<HomePage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
