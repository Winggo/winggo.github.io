import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Project = (props) => {
    if(props.withinDomain) {
        return (
            <Fade>
                <div className={styles.project}>
                    <Link to='/work/portfolio' className={styles.link}>
                        <h3 className={styles.header}>
                            {props.projectTitle}
                        </h3>
                    </Link>
                    <Link to='/work/portfolio' className={styles.link}>
                        <div className={styles.picContainer}>
                            <img className={styles.pic} src={props.pic} alt={props.picAlt} />
                        </div>
                    </Link>

                    <div>
                        <h4>
                            {props.descriptionHeader}
                        </h4>
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
            </Fade>
        )
    };
    
    return (
        <Fade>
            <div className={styles.project}>
                <a target='_blank' className={styles.link} 
                href={props.projectLink} 
                rel='noopener noreferrer'>
                    <h3 className={styles.header}>
                        {props.projectTitle}
                    </h3>
                </a>
                <a target='_blank' href={props.projectLink} rel='noopener noreferrer'>
                    <div className={styles.picContainer}>
                        <img className={styles.pic} src={props.pic} alt={props.picAlt} />
                    </div>
                </a>

                <div>
                    <h4>
                        {props.descriptionHeader}
                    </h4>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </Fade>
    );
}

export default Project;