import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import resume from '../../static/WinggoTse_Resume.pdf';

import github from '../../static/icons/github.png';
import linkedin from '../../static/icons/linkedIn.png';
import insta from '../../static/icons/instagram.png';
import unsplash from '../../static/icons/unsplash.png';


interface props {
    content?: string | Array<any>,
}

const Footer = (props: props) => {
    return (
        <Fade>
            <div className={styles.footer}>
                <hr></hr>
                <h2 className={styles.content}>
                    {props.content}
                </h2>
                <div className={styles.links}>
                    <Link to='/' className={styles.link}>
                        Home
                    </Link>
                    <Link to='/work' className={styles.link}>
                        Work
                    </Link>
                    <Link to='/blog' className={styles.link}>
                        Blog
                    </Link>
                    <Link to='/photography' className={styles.link}>
                        Photograhy
                    </Link>
                    <Link to={resume} target='_blank' className={styles.link}>
                        Résumé
                    </Link>
                </div>
                <div>
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
                <p className={styles.copyright}>
                    © 2020 All Rights Reserved - Designed & Coded by Winggo Tse 
                </p>
            </div>
        </Fade>
    );
}

export default Footer;