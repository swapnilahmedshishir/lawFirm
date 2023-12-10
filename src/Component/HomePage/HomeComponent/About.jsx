// import React from 'react';
import lawImage from '../../../ALLImage/pexels-pavel-danilyuk-8112197.jpg';

const About = () => {
 
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 about_img_col">
            <div className='about_img'>
              <img src={lawImage} alt="LawImage" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 about_text">
            <h1>ABOUT US - Best Law Firm In Bangladesh</h1>
            <p>
              Lorem ipsum dolor sit amet  est dolores, fuga fugiat, magnam esse labore laudantium ipsum quia facilis expedita exercitationem nihil amet earum? Dolor architecto quidem molestias eius corrupti. Quasi nemo accusantium voluptatem voluptates explicabo possimus, beatae adipisci. est dolores, fuga fugiat, magnam esse labore laudantium ipsum quia facilis expedita exercitationem nihil amet earum? Dolor architecto quidem molestias eius corrupti. Quasi nemo accusantium voluptatem voluptates explicabo possimus, beatae adipisci.consectetur adipisicing elit. Numquam suscipit veniam, est dolores, fuga fugiat, magnam esse labore laudantium ipsum quia facilis expedita exercitationem nihil amet earum? Dolor architecto quidem molestias eius corrupti. Quasi nemo accusantium voluptatem voluptates explicabo possimus, beatae adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
