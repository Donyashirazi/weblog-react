import './style.scss';
import React from 'react';
import { route, routes, link } from 'react';
import MainPage from '../MainPage';
import Suggestions from '../SuggestionPage';
import Search from '../SearchPage';
import { Link } from 'react';

const NavBar = ({ funcShowTab }) => {
	return (
		<div className="navbar">
			<div
				className="nav"
				onClick={() => {
					funcShowTab(1);
				}}
			>
				<a>MainPage</a>
			</div>
			<div
				className="nav"
				onClick={() => {
					funcShowTab(2);
				}}
			>
				<a>Suggestions</a>
			</div>
			<div
				className="nav"
				onClick={() => {
					funcShowTab(3);
				}}
			>
				<a>Search</a>
			</div>
		</div>
	);
};
export default NavBar;
