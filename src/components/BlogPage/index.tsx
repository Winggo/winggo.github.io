import React from 'react';
import Footer from '../Footer';
import styles from './index.module.css';
import Blog from './blog';

import sitePage from '../../static/portfolio.png';
import tsxLogo from '../../static/tsx.png';
import { Container } from 'react-bootstrap';

const BlogPage = () => {
    return (
        <Container>
            <div>
                <div className={styles.page}>
                    <Blog 
                        link='/blog/typescript'
                        pic={tsxLogo}
                        picAlt='TypeScript.'
                        title='Migrating to TypeScript'
                        desc='How and why I decided to migrate my codebase to TypeScript. What were the advantages?'
                        time='Dec 2019 - 10 min read'
                    />

                    <Blog
                        link='/blog/rearchitecture'
                        pic={sitePage}
                        picAlt='Landing page of my site.'
                        title='Rearchitecting the Frontend'
                        desc='How I approached redesigning and optimizing my site.'
                        time='Dec 2019 - 8 min read'
                    />

                </div>
                <Footer content='A place for all my thoughts. More to come.' />
            </div>
        </Container>
    );
}

export default BlogPage;