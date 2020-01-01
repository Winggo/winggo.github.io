import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import scrollDown from './static/scrollDown.png';

import Header from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';

const WorkPage = React.lazy(() => import('./components/WorkPage'));
const PhotographyPage = React.lazy(() => import('./components/PhotographyPage'));
const PortfolioPage = React.lazy(() => import('./components/Blogs/portfolio'));
const BlogPage = React.lazy(() => import('./components/BlogPage'));
const MigrationPage = React.lazy(() => import('./components/Blogs/typescript'));

function App() {
	const Status = 
		<div className='load'>
			<Spinner animation='grow' variant='secondary' />
		</div>;
	let toAbout = React.createRef<HTMLDivElement>();

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path='/'>
					<LandingPage />

					<div style={{textAlign: 'center', marginTop: '35vh'}}>
						<img 
							src={scrollDown} 
							onClick={() => toAbout.current?.scrollIntoView({behavior: 'smooth'})}
							style={{
								textAlign: 'center', 
								width: '50px', 
								height: '50px', 
								pointerEvents: 'all', 
								opacity: 0.7,
								animation: 'bounce 2s infinite',
								cursor: 'pointer',
							}} 
							alt='Scroll down' />
					</div>

					<div ref={toAbout}>
						<AboutPage />
					</div>
				</Route>
				
				<Route 
					path='/work'
					render={() => <Suspense fallback={Status}>
						<WorkPage />
						</Suspense>}
				/>

				{/* <Route 
					path='/about'
					render={() => <Suspense fallback={Status}>
						<AboutPage />
						</Suspense>}
				/> */}

				<Route 
					path='/photography'
					render={() => <Suspense fallback={Status}>
						<PhotographyPage />
						</Suspense>}
				/>

				<Route
					path='/blog/rearchitecture'
					render={() => <Suspense fallback={Status}>
						<PortfolioPage />
					</Suspense>}
				/>

				<Route
					path='/blog/typescript'
					render={() => <Suspense fallback={Status}>
						<MigrationPage />
					</Suspense>}
				/>

				<Route
					path='/blog'
					render={() => <Suspense fallback={Status}>
						<BlogPage />
					</Suspense>}
				/>

			</Switch>
		</div>
	);
}

export default App;
