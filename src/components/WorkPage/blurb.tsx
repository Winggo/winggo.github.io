import * as React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styles from './blurb.module.css';
import Footer from '../Footer';


interface props {
    title: string,
    desc: string,
    num: string,
    frontPic: string,
    frontPicAlt: string,
    prompt1: string,
    prompt1Response: string,
    prompt2?: string,
    prompt2Response?: string,
    link: string,
    text: string,
    text2: string,
    pic1: string,
    pic1Alt: string,
    pic1Caption: string,
    pic2: string,
    pic2Alt: string,
    pic2Caption: string,
    pic3: string,
    pic3Alt: string,
    pic3Caption: string,
    footer?: string,
}


const Blurb = (props: props) => {
    document.title = `Winggo Tse — ${props.title}`

    return (
        <Container>
            <Fade>
                <div 
                style={{display: 'grid', gridColumnGap: '40px', marginTop: '20px'}}
                className={styles.header}>
                    <h1 
                    style={{gridColumn: '1', fontSize: '3.5em'}}
                    className={styles.item1}>
                        {props.title}
                    </h1>
                    <h2 
                    style={{gridColumn: '2 / 4', fontSize: '2.8em', color: 'DimGrey', marginTop: '5px'}}
                    className={styles.item2}>
                        {props.desc}
                    </h2>
                    <h2 
                    style={{gridColumn: '4', fontSize: '3.5em'}}
                    className={styles.item3}>
                        {props.num}
                    </h2>
                </div>

                <div className={styles.picContainer}>
                    <img src={props.frontPic} className={styles.frontPic} alt={props.frontPicAlt} />
                </div>
            </Fade>

            <Fade>
                <div style={{display: 'grid', gridColumnGap: '50px'}}>
                    <div style={{gridColumn: '1', margin: '15px'}} className={styles.sidebar}>
                        <div>
                            <h4>
                                <b>{props.prompt1}</b>
                                <br></br>
                                {props.prompt1Response}
                            </h4>
                            <h4 style={{marginTop: '30px', marginBottom: '30px'}}>
                                <b>{props.prompt2}</b>
                                <br></br>
                                {props.prompt2Response}
                            </h4>
                        </div>
                        <a target='_blank' 
                        href={props.link}
                        rel='noopener noreferrer'
                        style={{color: 'black'}}>
                            <h3>
                                <b>Website↗</b>
                            </h3>
                        </a>
                    </div>
                    <div style={{gridColumn: '2', margin: '15px'}} className={styles.text}>
                        <h3>
                            {props.text}
                        </h3>
                        <br></br>
                        <h3>
                            {props.text2}
                        </h3>
                    </div>
                </div>
            </Fade>

            <Fade>
                <div className={styles.picContainer}>
                    <img src={props.pic1} className={styles.frontPic} alt={props.pic1Alt} />
                    <p style={{margin: '10px'}}>
                        {props.pic1Caption}
                    </p>
                </div>
            </Fade>

            <Fade>
                <div className={styles.picContainer}>
                    <img src={props.pic2} className={styles.frontPic} alt={props.pic2Alt} />
                    <p style={{margin: '10px'}}>
                        {props.pic2Caption}
                    </p>
                </div>
            </Fade>

            <Fade>
                <div className={styles.picContainer}>
                    <img src={props.pic3} className={styles.frontPic} alt={props.pic3Alt} />
                    <p style={{margin: '10px'}}>
                        {props.pic3Caption}
                    </p>
                </div>
            </Fade>

            <Fade>
                <Footer content={props.footer} />
            </Fade>
        </Container>
    );
}

export default Blurb;