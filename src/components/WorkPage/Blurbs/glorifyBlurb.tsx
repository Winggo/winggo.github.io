import * as React from 'react';
import Blurb from '../blurb';
import screen from '../../../static/glorifyScreen_1200.png';
import glorify from '../../../static/glorify.png'


const GlorifyBlurb = () => {
    return (
        <Blurb
        title='Glorify'
        desc="A lightweight Google Chrome extension built to boost creativity and mindfulness"
        num='05'
        frontPic={screen}
        frontPicAlt='New tab screen with Glorify'
        prompt1='Role'
        prompt1Response='Frontend Developer'
        prompt2='Type'
        prompt2Response='Personal creative project'
        link='https://chrome.google.com/webstore/detail/glorify/cgfkjilppdjifdiabiogenbncidmpkkd'
        text={`
            A simple Chrome extension I made for myself after being inspired by the Momentum 
            extension. I wanted to build something to express God's goodness in my life and 
            decided to share this simple extension for others as a reminder as well. This was a refreshing 
            project to work on because of the premise that something doesn't necessarily need to be complex to 
            have significance.`}
        text2='Developed with React, CSS, Unsplash and Daily Verses API.'
        pic1={glorify}
        pic1Alt='Glorify on the Chrome web store'
        pic1Caption='Glorify on the Chrome web store. Currently rated 5 stars with over 70 users.'
        
        />
    );
}

export default GlorifyBlurb;