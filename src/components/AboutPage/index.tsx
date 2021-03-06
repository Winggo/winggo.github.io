import * as React from 'react';
import styles from './index.module.css';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';

import profPic from '../../static/me.jpg';
import { Container } from 'react-bootstrap';


interface props {
    toAbout: React.RefObject<HTMLDivElement>
}

const AboutPage = (props: props) => {
    return (
        <div id={styles.aboutBackground} ref={props.toAbout}>
            <Container>
                <div className={styles.page}>
                    <Fade>
                        <div className={styles.flexItem}>
                            <img src={profPic} alt='Me!' />
                        </div>
                    </Fade>

                    <Fade>
                        <div className={styles.flexItem}>
                            <h2>
                                Hi! I'm Winggo Tse - a software engineer from San Francisco, CA.
                            </h2>
                            <p>
                                {'Currently at '}
                                <i>
                                    <a target='_blank' className={styles.link} 
                                        href='https://www.useanvil.com/'
                                        rel='noopener noreferrer'>Anvil</a>
                                </i>.
                            </p>
                            <p>
                                My interests lie in intuitive, smooth software design and development with emerging technologies 
                                and how we can leverage them to educate and benefit others in the modern era. I aspire to make change by 
                                influencing public perception of the world through software, digital media, and data.
                            </p>
                            <p>
                                Currently seeking full-time software engineering roles. Primarily experienced in full-stack development. 
                                My favorite tools for the job include TypeScript, React.js, Node.js, Redux.js, Python, Firebase, PostgreSQL, and CI/CD.
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
                            </p>
                        </div>
                    </Fade>
                </div>

                <Footer content={[
                    "Happy to meet you. Let's ", 
                    <a 
                    key='unique'
                    className={styles.footerLink}
                    href='mailto: winggo.tse@gmail.com'
                    rel='noopener noreferrer'>
                        connect
                    </a>,
                    "!"
                ]}/>
            </Container>
        </div>
    );
}

export default AboutPage;