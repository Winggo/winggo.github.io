import React from 'react';
import Footer from '../Footer';
import styles from './index.module.css';
import Blog from './blog';

import sitePage from '../../static/portfolio.png';

const BlogPage = () => {
    return (
        <div>
            <div className={styles.page}>
                <Blog
                    link='/blog/rearchitecture'
                    pic={sitePage}
                    picAlt='Landing page of my site.'
                />
            </div>
            <Footer content='A place for all my thoughts. More to come.' />
        </div>
    );
}

export default BlogPage;