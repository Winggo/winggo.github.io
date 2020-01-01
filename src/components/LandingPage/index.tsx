import React from 'react';
import styles from './index.module.css';
import Fade from 'react-reveal/Fade';
import VideoBg from 'reactjs-videobg';
import vid from '../../static/Yosemite.mp4';
import poster from '../../static/YosemitePoster.png';

const LandingPage = () => {
    return (
        <div id={styles.page}>
            <VideoBg poster={poster} videoClass={styles.video}>
                <VideoBg.Source src={vid} type='video/mp4' />
            </VideoBg>

            <Fade>
                <div id={styles.main}>
                    <h1>
                        Winggo Tse
                    </h1>
                    <hr></hr>
                    <h5>
                        Software Engineer + Creative
                    </h5>
                </div>
            </Fade>
        </div>
    );
}

export default LandingPage;