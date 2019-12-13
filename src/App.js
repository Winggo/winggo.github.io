import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import PhotographyPage from './components/PhotographyPage';
import PortfolioPage from './components/ProjectsPage/portfolio';

function App() {

	return (
		<div className="App">
			<Container>
				<Header />
				<Switch>

					<Route exact path='/'>
						<LandingPage />
					</Route>

					<Route path='/projects/portfolio'>
						<PortfolioPage />
					</Route>
					
					<Route path='/projects'>
						<ProjectsPage />
					</Route>

					<Route path='/about'>
						<AboutPage />
					</Route>

					<Route path='/photography'>
						<PhotographyPage />
					</Route>

				</Switch>
			</Container>
		</div>
	);
}

export default App;
