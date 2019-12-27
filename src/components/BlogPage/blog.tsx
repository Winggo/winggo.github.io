import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './index.module.css';
import { Link } from 'react-router-dom';


interface props {
    link: string,
    title: string,
    desc: string,
    time: string,
    pic: string,
    picAlt: string
}

const Blog = (props: props) => {
    return (
        <Fade>
            <div className={styles.blog}>
                <div className={styles.blogText}>
                    <Link to={props.link} className={styles.link}>
                        <h2>
                            <b>{props.title}</b>
                        </h2>
                        <h5>
                            {props.desc}
                        </h5>
                    </Link>
                    <p>
                        {props.time}
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