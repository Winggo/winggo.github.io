import * as React from 'react';
import Blurb from '../blurb';
import foodgo from '../../../static/foodgo_1200.png';
import input from '../../../static/foodgoInput_1200.png';
import vote from '../../../static/foodgoVote_1200.png';
import reviews from '../../../static/foodgoReviews_1200.png';


const foodgoBlurb = () => {
    return (
        <Blurb
        title='foodgo'
        desc='Web app to help you decide on a restraurant everyone can agree upon'
        num='04'
        frontPic={foodgo}
        frontPicAlt='foodgo landing page'
        prompt1='Role'
        prompt1Response='Frontend Developer'
        prompt2='Type'
        prompt2Response='Group project'
        link='https://foodgo183.herokuapp.com/'
        text={`
            foodgo is an interactive web application designed to help you 
            decide on a restaurant nearby, while taking into consideration 
            all your friends' preferences. The flow is simple, intuitive, and 
            takes no more than a couple minutues. Simply invite your friends to 
            your group, input your preferred cuisine, travel distance, price range. 
            foodgo will generate a list of restaurants with photos and reviews 
            fitting everyone's preferences using Yelp API. 
            Lastly, everyone gets a vote on their restaurant of choice. The final 
            restaurant is shown to all members with the address.`}
        text2='Developed with React, Node, Firebase, Yelp Fusion API, and CSS.'
        pic1={input}
        pic1Alt='Input preferences interface'
        pic1Caption='Enter in your cuisine, price range, distance, and 
            foodgo will query the restaurants on Yelp.'
        pic2={vote}
        pic2Alt='Restaurant voting modal'
        pic2Caption='Input Italian, $$ price range, 15 mile radius. List of 
            restaurants matching your preferences generated for you to choose.'
        pic3={reviews}
        pic3Alt='Restaurant Yelp reviews displayed on foodgo'
        pic3Caption='Expanded restaurant card displaying address, reviews, and ratings.'
        nextBlurbLink='/work/glorify'
        />
    );
}

export default foodgoBlurb;