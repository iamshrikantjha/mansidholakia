import React from "react";
import TestimonialBlock from "./TestimonialBlock";

const Testimonials = () => {
  return (
    <>
      <div className="container">
        {/* Title */}
        <div className="hero is-medium">
          <div className="hero-body title serif is-size-1">
            {/* <p className="title is-size-1 is-size-3-mobile serif has-text-dark">Testimonials</p> */}
            <div className="bgGreen">
              <p className="font_0 is-size-1-mobile">Testimonials</p>
            </div>
          </div>
        </div>
        {/* Images */}
        <div className="columns is-marginless">
          <TestimonialBlock
            think="“Mansi is an amazing author and a great mentor. Her communication skills are par excellence which makes it easy for her to connect with people. She is a lovely person to have around.”"
            url="https://mansiidholakia.com/images/SiteImages/Testimonials/Ayaz.jpg"
            name="Ayaz Alam"
            company="NHS Scientist, London, U.K."
          />
          <TestimonialBlock
            think="“Mansi is a well established entrepreneur and a woman of many talents. I personally love her motivational poetry and quotes. She is an excellent speaker and has the ease to talk to anyone. She is a mentor to many students I know, and she is a fantastic counseller.”"
            url="https://mansiidholakia.com/images/SiteImages/Testimonials/Kamini.jpeg"
            name="Dr. Kamini Marvadi"
            company="Independent Prescriber, London, U.K."
          />
          <TestimonialBlock
            think="“Mansi has always been someone I look upto and she has helped change my life in positive direction. She is someone who you can trust easily and her guidance and counsel has helped me to achieve so much in my life. I am indebted to her kindness and positivity.”"
            url="https://mansiidholakia.com/images/SiteImages/Testimonials/Niraja.jpeg"
            name="Ms. Niraja Patel"
            company="Pharmacy Manager, Holbrook Arizona, USA"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
