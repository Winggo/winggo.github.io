import * as React from 'react';
import Blurb from '../blurb';
import frontPic from '../../../static/portfolio_1200.jpg';
import transition from '../../../static/transition.gif';
import gallery from '../../../static/photoGallery_1200.jpg';
import blogPage from '../../../static/blogPage_1200.png';


const PortfolioBlurb = () => {
    return (
        <Blurb
        title='Portfolio'
        desc='My personal space for software development and photography'
        num='02'
        frontPic={frontPic}
        frontPicAlt='Portfolio landing page'
        prompt1='Role'
        prompt1Response='Designer and Developer'
        prompt2='Type'
        prompt2Response='Personal creative project'
        link='https://github.com/Winggo/Professional-Portfolio'
        text={`
            This is the space where I freely experiment with technology and design. 
            I enjoy working with various new libraries, blogging my thoughts 
            throughout my career, documenting everything I've learned, and showcasing 
            everything I find beauty in. Doing my best to make this site my interactive, intuitive, 
            and mobile friendly. Planning to work with GSAP animation, transitions, D3.js and 
            Three.js in the future.`}
        text2='Developed with React, TypeScript, CSS, and various React libraries.'
        pic1={transition}
        pic1Alt='Landing page transition'
        pic1Caption='Landing page should immediately draw your attention'
        pic2={gallery}
        pic2Alt='Photo gallery page'
        pic2Caption='Photo gallery page featuring photos from my Yosemite trip. Planning to implement hover effects!'
        pic3={blogPage}
        pic3Alt='TypeScript blog page'
        pic3Caption='Blog post detailing my experience migrating to TypeScript posted in December 2019.'
        nextBlurbLink='/work/newsletter'
        />
    );
}

export default PortfolioBlurb;