import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import scrollDown from './static/icons/scrollDown.png';

import Header from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ScrollTo from './components/scrollTo';

const WorkPage = React.lazy(() => import('./components/WorkPage'));
const PhotographyPage = React.lazy(() => import('./components/PhotographyPage'));
const PortfolioPage = React.lazy(() => import('./components/Blogs/portfolio'));
const BlogPage = React.lazy(() => import('./components/BlogPage'));
const MigrationPage = React.lazy(() => import('./components/Blogs/typescript'));
const InternBlurb = React.lazy(() => import('./components/WorkPage/Blurbs/internBlurb'));
const PortfolioBlurb = React.lazy(() => import('./components/WorkPage/Blurbs/portfolioBlurb'));
const NewsletterBlurb = React.lazy(() => import('./components/WorkPage/Blurbs/newsletterBlurb'));
const FoodgoBlurb = React.lazy(() => import('./components/WorkPage/Blurbs/foodgoBlurb'));
const GlorifyBlurb = React.lazy(() => import('./components/WorkPage/Blurbs/glorifyBlurb'));


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
					<ScrollTo logo={scrollDown} toAbout={toAbout} alt='Scroll to about section' />
					<AboutPage toAbout={toAbout} />
				</Route>

				<Route
					path='/work/successhub'
					render={() => <Suspense fallback={Status}>
						<InternBlurb />
						</Suspense>}
				/>

				<Route
					path='/work/portfolio'
					render={() => <Suspense fallback={Status}>
						<PortfolioBlurb />
						</Suspense>}
				/>

				<Route
					path='/work/newsletter'
					render={() => <Suspense fallback={Status}>
						<NewsletterBlurb />
						</Suspense>}
				/>

				<Route
					path='/work/foodgo'
					render={() => <Suspense fallback={Status}>
						<FoodgoBlurb />
						</Suspense>}
				/>

				<Route
					path='/work/glorify'
					render={() => <Suspense fallback={Status}>
						<GlorifyBlurb />
						</Suspense>}
				/>
				
				<Route 
					path='/work'
					render={() => <Suspense fallback={Status}>
						<WorkPage />
						</Suspense>}
				/>

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
