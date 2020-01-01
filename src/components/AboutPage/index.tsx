import React from 'react';
import styles from './index.module.css';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';

import profPic from '../../static/IMG_5621.jpg';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <div id={styles.aboutBackground}>
            <Container>
                <div className={styles.page}>
                    <Fade>
                        <div className={styles.flexItem}>
                            <img src={profPic} alt='Graduation day.' />
                        </div>
                    </Fade>

                    <Fade>
                        <div className={styles.flexItem}>
                            <h2>
                                Hi! I'm Winggo Tse - a software engineer from San Francisco, CA.
                            </h2>
                            <p>
                                Previously at{' '}
                                <i>
                                    <a target='_blank' className={styles.link} 
                                        href='http://successhub.co/'
                                        rel='noopener noreferrer'>Softprofiles</a>
                                </i>.
                            </p>
                            {/* Having recently graduated from University of California, Santa Cruz with a bachelor's 
                                degree in computer science but now based in San Francisco, the next venture of mine is to 
                                devote myself to a company with an outward mission. Residing in the heart of Silicon 
                                Valley, I'm extremely blessed to have many opportunities in tech. */}
                            <p>
                                My interests lie in intuitive, smooth software design and development with emerging technologies 
                                and how we can use them to educate and benefit others in the modern era. I aspire to make change by 
                                influencing public perception of the world using software, digital media, and data.
                            </p>
                            <p>
                                Currently seeking full-time software engineering roles. Primarily experienced in front-end development. 
                                My favorite tools for the job include React.js, Next.js, Express.js, Html/Css, Node.js, and TypeScript.
                            </p>
                            <p>    
                                Feel free to drop a{' '}
                                <a target='_blank' className={styles.link} 
                                href='https://www.messenger.com/t/winggo.tse'
                                rel='noopener noreferrer'>message</a> 
                                {' '}or send me an{' '} 
                                <a className={styles.link}
                                href='mailto: winggo.tse@gmail.com'
                                rel='noopener noreferrer'>email</a>!
                                <br></br>
                                Reply time: <b>0-2 working days</b>
                            </p>
                        </div>
                    </Fade>
                </div>

                <Footer content={[
                    "Happy to meet you. Let's ", 
                    <a className={styles.footerLink}
                        href='mailto: winggo.tse@gmail.com'
                        rel='noopener noreferrer'>connect</a>,
                    "!"
                ]}/>
            </Container>
        </div>
    );
}

export default AboutPage;