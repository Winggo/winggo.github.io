import React from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';
import Gallery from 'react-photo-gallery';

import pic1 from '../../static/gallery/P1201189.jpg';
import pic2 from '../../static/gallery/P1201200.jpg';
import pic3 from '../../static/gallery/P1201235.jpg';
import pic4 from '../../static/gallery/P1201280.jpg';
import pic5 from '../../static/gallery/P1201305.jpg';
import pic6 from '../../static/gallery/P1211360.jpg';
import pic7 from '../../static/gallery/P1211409.jpg';
import pic8 from '../../static/gallery/P1211503.jpg';
import pic9 from '../../static/gallery/P1211627.jpg';
import pic10 from '../../static/gallery/P2184275.jpg';
import pic11 from '../../static/gallery/P7080819.jpg';
import pic12 from '../../static/gallery/YosemiteFalls.jpg';
import pic13 from '../../static/gallery/PC033026.jpg';
import pic14 from '../../static/gallery/AboveItAll.jpg';
import pic15 from '../../static/gallery/IMG_0383.jpg';
import pic16 from '../../static/gallery/P7191303.jpg';
import pic17 from '../../static/gallery/PC050865.jpg';
import { Container } from 'react-bootstrap';




const PhotographyPage = () => {
    document.title = 'Winggo Tse — Photography';

    const photos = [
        {
            src: pic1,
            width: 3,
            height: 4
          },
          {
            src: pic2,
            width: 4,
            height: 3
          },
          {
            src: pic3,
            width: 4,
            height: 3
          },
          {
            src: pic4,
            width: 4,
            height: 3
          },
          {
            src: pic5,
            width: 3,
            height: 4
          },
          {
            src: pic6,
            width: 3,
            height: 4
          },
          {
            src: pic7,
            width: 3,
            height: 4
          },
          {
            src: pic8,
            width: 3,
            height: 4
          },
          {
            src: pic9,
            width: 3,
            height: 4
          },
          {
            src: pic10,
            width: 3,
            height: 4
          },
          {
            src: pic11,
            width: 3,
            height: 4
          },
          {
            src: pic12,
            width: 3,
            height: 4
          },
          {
            src: pic13,
            width: 3,
            height: 4
          },
          {
            src: pic14,
            width: 4,
            height: 3
          },
          {
            src: pic15,
            width: 4,
            height: 3
          },
          {
            src: pic16,
            width: 3,
            height: 4
          },
          {
            src: pic17,
            width: 3,
            height: 4
          },
    ];

    return (
		<Container>
      <Fade>
        <Gallery
          photos={photos}
          direction={'column'}
        />
      </Fade>
      <Fade>
        <Footer content='Imagery is powerful.' />
      </Fade>
		</Container>
    );
}

export default PhotographyPage;