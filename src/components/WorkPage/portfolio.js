import React from 'react';
import portfolio from '../../static/YosemitePoster.png';
import styles from './portfolio.module.css';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';
import Figure from 'react-bootstrap/Figure';

import server_side from '../../static/serverSideRender.gif';
import client_side from '../../static/clientSideRender.gif';


const PortfolioPage = () => {
    return (
        <div>
            <div className={styles.page}>
                <Fade>
                    <div className={styles.picContainer}>
                        <img src={portfolio} className={styles.frontPic} alt="My website's front page." />
                    </div>
                    
                    <div className={styles.content}>
                        <h1 style={{textAlign: 'center'}}>Rearchitecting My Website's Frontend</h1>
                        <p>
                            In this post we'll take a look at the (1) why front-end apps are moving towards 
                            dynamic single page apps (PWA) and away from from what we've been doing so long using 
                            standard HTML/CSS/JS with server-side rendering. (2) I'll be sharing insights on my approach 
                            and outline the steps I took to move away from my legacy website codebase into a dynamic 
                            interface that takes advantage of modern browsers. And lastly, (3) there are some interesting 
                            technologies I can see myself adopting moving forward that are relevant in this area.
                        </p>
                        <p>
                            It's 2019 and by now everyone knows that progessive web apps (PWA) are the standard 
                            moving forward. Everyone cares about the user experience, and just 2-3 seconds 
                            of wait time navigating from page to page can deter an interested user. 
                            PWAs focus on the user experience while providing reliability and engagement. 
                            And what better way to brush up on React with the introduction of v16.8 than to 
                            rearchitect my entire site?
                        </p>
                        <div style={{textAlign: 'center', marginTop: '30px'}}>
                            <Figure>
                                <Figure.Image style={{marginRight: '10px'}}
                                    src={client_side}
                                    width={280}
                                    alt='clientRender'
                                />
                                <Figure.Image style={{marginLeft: '10px'}}
                                    src={server_side}
                                    width={280}
                                    alt='clientRender'
                                />
                                <Figure.Caption>
                                    Client-side render vs. Server-side render<br></br>
                                    3.5s vs 6.9s
                                </Figure.Caption>
                            </Figure>
                        </div>
                        <p>
                            Immediately the transitions between routes feels smoother and is at least 2x 
                            faster (>1s vs 2.2s load time) because instead of waiting for the server to 
                            respond with a new HTML page, the browser simply needs to run JavaScript to 
                            manipulate the DOM. Server communication is unnecessary.
                        </p>
                        <p>
                            This is a work in development, and I'll leave it here for now. An approach I'm 
                            very interested in to further optimize performance is using the React-Loadable 
                            library to lazy load JavaScript bundles. This works by loading the bare minimum 
                            JavaScript to make the webpage interactive, and downloading the rest of the JS 
                            code that's unnecessary at the moment while the browser is idle.
                        </p>
                    </div>
                </Fade>
            </div>

            <Fade>
                <Footer content={null} />
            </Fade>
        </div>
    );
}

export default PortfolioPage;