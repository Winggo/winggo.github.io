import React from 'react';
import styles from './index.module.css';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';

import profPic from '../../static/IMG_5621.jpg';

const AboutPage = () => {
    return (
        <div>
            <div className={styles.page}>
                <Fade>
                    <div className={styles.flexItem}>
                        <img src={profPic} alt='Graduation day.' />
                    </div>
                </Fade>

                <Fade>
                    <div className={styles.flexItem}>
                        <h2>
                            Hello, my name is <i>Winggo Tse</i>.
                        </h2>
                        <p>
                            I was previously at{' '}
                            <i>
                                <a target='_blank' className={styles.link} 
                                    href='http://successhub.co/'
                                    rel='noopener noreferrer'>Softprofiles</a>
                            </i>.
                        </p>
                        <p>
                            Having recently graduated from University of California, Santa Cruz with a bachelor's 
                            degree in computer science but now based in San Francisco, the next venture of mine is to 
                            devote myself to a company with an outward mission. Residing in the heart of Silicon 
                            Valley, I'm extremely blessed to have many opportunities in tech. Software engineering, 
                            creativity, photography, and the outdoors all fill my soul and I hope the content I 
                            put here may inspire you. Wish to chat? Hit me up on{' '}
                            <a target='_blank' className={styles.link} 
                            href='https://www.messenger.com/t/winggo.tse'
                            rel='noopener noreferrer'>Messenger</a> 
                            {' '}or drop me an{' '} 
                            <a target='_blank' className={styles.link}
                            href='mailto: winggo.tse@gmail.com'
                            rel='noopener noreferrer'>email</a>.
                        </p>
                        <p>
                            I'm currently seeking full-time software engineering roles. Experienced in backend and 
                            primarily frontend development. Feel free to drop a message!
                        </p>
                    </div>
                </Fade>
            </div>

            <Footer content={null}/>
        </div>
    );
}

export default AboutPage;