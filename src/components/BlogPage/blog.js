import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './index.module.css';
import { Link } from 'react-router-dom';


const Blog = (props) => {
    return (
        <Fade>
            <div className={styles.blog}>
                <div className={styles.blogText}>
                    <Link to={props.link} className={styles.link}>
                        <h2>
                            <b>Rearchitecting the Frontend</b>
                        </h2>
                        <h5>
                            How I approached redesigning and optimizing my site.
                        </h5>
                    </Link>
                    <p>
                        Dec 2019 - 8 min read
                    </p>
                </div>
                <div className={styles.picContainer}>
                    <Link to={props.link}>
                        <img src={props.pic} alt={props.picAlt} className={styles.blogPic} />
                    </Link>
                </div>
            </div>
        </Fade>
    );
}

export default Blog;