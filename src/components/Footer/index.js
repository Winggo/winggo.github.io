import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './index.module.css';

import github from '../../static/github.png';
import linkedin from '../../static/linkedIn.png';
import insta from '../../static/instagram.png';
import unsplash from '../../static/unsplash.png';

const Footer = (props) => {
    return (
        <Fade>
            <div>
                <hr></hr>
                <h2 className={styles.content}>
                    {props.content}
                </h2>
                <div className={styles.logos}>
                    <a target='_blank' 
                        href='http://github.com/Winggo'
                        rel='noopener noreferrer'>
                        <img src={github} className={styles.logo} alt='My Github profile' />
                    </a>

                    <a target='_blank' 
                        href='http://linkedin.com/in/Winggotse'
                        rel='noopener noreferrer'>
                        <img src={linkedin} className={styles.logo} alt='My LinkedIn profile' />
                    </a>

                    <a target='_blank' 
                        href='https://instagram.com/winggotse/'
                        rel='noopener noreferrer'>
                        <img src={insta} className={styles.logo} alt='My Instagram profile' />
                    </a>

                    <a target='_blank' 
                        href='https://www.unsplash.com/@winggo/'
                        rel='noopener noreferrer'>
                        <img src={unsplash} className={styles.logo} alt='My Unsplash profile' />
                    </a>
                </div>
            </div>
        </Fade>
    );
}

export default Footer;