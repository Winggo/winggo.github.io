import React from 'react';
import styles from './index.module.css';
import Project from './project';
import Footer from '../Footer';

import softprofiles from '../../static/softprofiles.png';
import newsletter from '../../static/newsletter.png';
import foodgo from '../../static/foodgo_600.png';
import glorify from '../../static/glorifyScreen_1200.png';
import winggo_us from '../../static/portfolio.png';
import { Container } from 'react-bootstrap';

const WorkPage = () => {
    document.title = 'Winggo Tse — Work';

    return (
        <Container>
            <div>
                <div className={styles.page}>
                    <Project
                        blogLink='/work/softprofiles'
                        externalLink='successhub.co'
                        projectTitle='Softprofiles - 01'
                        pic={softprofiles}
                        picAlt='Softprofiles login page.'
                        descriptionHeader='Software Engineer Intern'
                        description={`
                            Worked at Softprofiles, an edu-tech startup, in the backend team. 
                            Developed the Node.js server backend building RESTful API endpoints using Sequelize.js as  
                            well as the frontend building interfaces with React and managing state with Redux.`}
                    />

                    <Project 
                        blogLink='/work/portfolio'
                        projectTitle='Winggo.us - 02'
                        pic={winggo_us}
                        picAlt='Front page of the website.'
                        descriptionHeader='Professional Portfolio'
                        description={`
                        My portfolio containing all my projects, blogs, photography, and other interests. Designed with Figma. 
                        Built with React and CSS. Plugins include reactjs-videobg and react-photo-gallery.`}
                    />

                    <Project
                        blogLink='/work/newsletter'
                        externalLink='baythai2019-newsletter.herokuapp.com'
                        projectTitle='Creative Newsletter - 03'
                        pic={newsletter}
                        picAlt='My summer mission experience newsletter first page.'
                        descriptionHeader='Parallax Single Page App'
                        description={`
                            Built and designed a website for a newsletter featuring my experience in Thailand this past summer. 
                            Developed with React, React-spring, React-reveal, CSS.`}
                    />

                    <Project
                        blogLink='/work/foodgo'
                        externalLink='foodgo183.herokuapp.com'
                        projectTitle='Foodgo - 04'
                        pic={foodgo}
                        picAlt='Foodgo landing page.'
                        descriptionHeader='Group Restaurant Voting Application'
                        description={[
                            `Takes input from multiple users, finds the nearest restaurants determined 
                            by your group's preferences, displays the Yelp reviews, and generates a restaurant 
                            everyone can agree with. Built with React, CSS, Firebase, and `,
                            <a key='unique' target="_blank" className={styles.link} href="https://www.yelp.com/fusion" rel='noopener noreferrer'>
                                Yelp Fusion API
                            </a>,
                            `. Design inspired by Tinder.`]}
                    />

                    <Project 
                        blogLink='/work/glorify'
                        externalLink='chrome.google.com/webstore/detail/glorify/cgfkjilppdjifdiabiogenbncidmpkkd'
                        projectTitle='Glorify - 05'
                        pic={glorify}
                        picAlt='Extension page in the Google Chrome store.'
                        descriptionHeader='Google Chrome Extension'
                        description={`
                            My personal Chrome extension built with React, responsive CSS, and Unsplash API. How 
                            shared with the world and available to install. Inspired by the Momentum Chrome extension.`}
                    />

                </div>

                <Footer content='Always working on some sort of side project.' />
            </div>
        </Container>
    );
}

export default WorkPage;