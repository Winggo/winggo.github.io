import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './index.module.css';
import { Link } from 'react-router-dom';


interface props {
    blogLink?: string,
    projectTitle: string,
    pic: string,
    picAlt: string,
    description: string | Array<any>,
    descriptionHeader: string,
    externalLink?: string,
}

const Project = (props: props) => {
    if(props.blogLink) {
        let externalLink = <div></div>;
        if(props.externalLink) {
            externalLink = <p style={{fontSize: '1.0em', marginBottom: '8px', overflow: 'hidden'}}>
                                <a target='_blank' className={styles.link}
                                href={'http://'+props.externalLink}
                                rel='noopener noreferrer'>
                                    {props.externalLink}
                                </a>
                            </p>;
        }

        return (
            <Fade>
                <div className={styles.project}>
                    <Link to={props.blogLink} className={styles.link}>
                        <h3 className={styles.header}>
                            {props.projectTitle}
                        </h3>
                    </Link>
                    <Link to={props.blogLink} className={styles.link}>
                        <div className={styles.picContainer}>
                            <img className={styles.pic} src={props.pic} alt={props.picAlt} />
                        </div>
                    </Link>

                    <div>
                        <h4 style={{gridColumn: '1', marginBottom: '3px'}}>
                            <Link to={props.blogLink} className={styles.projectTitle}>
                                {props.descriptionHeader}
                            </Link>
                        </h4>

                        {externalLink}

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
                href={props.externalLink} 
                rel='noopener noreferrer'>
                    <h3 className={styles.header}>
                        {props.projectTitle}
                    </h3>
                </a>
                <a target='_blank' href={props.externalLink} rel='noopener noreferrer'>
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