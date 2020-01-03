import * as React from 'react';
import Softprofiles from '../../../static/softprofiles_1200.png';
import StudentProfile from '../../../static/studentProfiles_1200.png';
import StudentCourses from '../../../static/studentCourses_1200.png';
import ModalPic from '../../../static/studentModal_1200.png';
import Blurb from '../blurb';

const InternBlurb = () => {
    return (
        <Blurb
        title='Softprofiles'
        desc='A transformative student success platform'
        num='01'
        frontPic={Softprofiles}
        frontPicAlt='Softprofiles'
        prompt1='Role'
        prompt1Response='Software Engineer Intern'
        prompt2='Company'
        prompt2Response='Softprofiles'
        link='http://successhub.co/'
        text={`
            Softprofiles is an ed-tech software startup based in San Jose, California. 
            I contributed to building the success manager platform as a software 
            engineer intern in the backend development team. School staff are able to 
            customize their profiles, message students and professors, 
            and access student success portals to guage performance. I expanded 
            the backend by building RESTful API endpoints to retrieve client data from the 
            PostgreSQL database using object relational mapping and authentication 
            middleware. Other responsabilities include API versioning and documentation.`}
        text2='Relevant technologies include Sequelize.js, Node.js, AWS SS3, React, and Redux.'
        pic1={StudentProfile}
        pic1Alt='Student profile'
        pic1Caption={`User interface to update student profile on success manager platform,
            worked on the interactive interface and the underlying API methods`}
        pic2={StudentCourses}
        pic2Alt='Courses directory'
        pic2Caption='Student courses directory with test data'
        pic3={ModalPic}
        pic3Alt='Confirmation modal'
        pic3Caption='Update changes confirmation modal'
        nextBlurbLink='/work/portfolio'
        />
    );
}

export default InternBlurb;