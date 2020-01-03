import * as React from 'react';
import Blurb from '../blurb';
import frontPic from '../../../static/transition_1200.gif';
import scroll from '../../../static/newsletterScroll_1200.gif';
import testimony from '../../../static/testimony_1200.png';
import thankyou from '../../../static/kapunkap_1200.png';

const newsletterBlurb = () => {
    return (
        <Blurb 
        title='Missions Newsletter'
        desc='About everything my missions team and I did in Thailand 2019 in the form of a parallax website #BayThai'
        num='03'
        frontPic={frontPic}
        frontPicAlt='Newsletter landing page'
        prompt1='Role'
        prompt1Response='Frontend Developer'
        prompt2='Type'
        prompt2Response='Personal creative project'
        link='https://baythai2019-newsletter.herokuapp.com/'
        text={`
            A newsletter in the format of a website written and designed for all 
            my friends, supporters, and family members. Thank you for all your contributions 
            through prayers and finances. My time in Thailand has been one of the best experiences 
            of my life. It's been truly incredible interacting with people abroad and 
            forming relationships with TCCC staff and Rajhabat University students. 
            This incredible trip with my team is documented through various forms of digital 
            media, and the time I spent in Thailand will always have a place in my heart.`}
        text2='Developed with React, react-spring, and CSS.'
        pic1={scroll}
        pic1Alt='Parllax effect'
        pic1Caption='Transitions and page parallax effect'
        pic2={testimony}
        pic2Alt='Missions testimony from team member'
        pic2Caption='Personal post mission-trip testimony from a fellow team member'
        pic3={thankyou}
        pic3Alt='Thank you in Thai'
        pic3Caption='End of letter. Kapunkap / Kapunka!'
        nextBlurbLink='/work/foodgo'
        />
    );
}

export default newsletterBlurb;