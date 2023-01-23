import './style.scss';
import { useState } from 'react';
import NavBar from '../NavBar';
import MainPage from '../MainPage';
import SuggestionPage from '../SuggestionPage';
import SearchPage from '../SearchPage';
import { Routes, Route } from 'react-router';

const HomePage = () => {
	const [activePage, setactivePage] = useState(1);

	return (
		<>
			<div className="main-container">
				<div className="header">
					<NavBar funcShowTab={setactivePage} />
					{activePage === 1 ? (
						<MainPage />
					) : activePage === 2 ? (
						<SuggestionPage />
					) : (
						<SearchPage />
					)}
				</div>
			</div>
			<div>footer</div>
		</>
	);
};
export default HomePage;
