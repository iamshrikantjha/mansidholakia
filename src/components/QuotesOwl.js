import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import blog1 from './../assets/images/blog_1.png'
import blog2 from './../assets/images/blog_2.png'
import blog3 from './../assets/images/blog_3.png'
import blog4 from './../assets/images/blog_4.png'
import blog5 from './../assets/images/blog_5.png'

const QuotesOwl = () => {
    
  return (
    <>
      <div className="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }}>
          <div className="col-sm-12 btn btn-info">
            {/* Owl Carousel In React Application */}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <OwlCarousel
        
        // OPTIONS
        loop={true}
        responsiveClass={true}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        }}
        dots={false}
        autoWidth={false}
        autoplay={true}
        autoplayTimeout={2000}
        
        
        
        items={3} className="owl-theme has-background-light" loop nav margin={8}>
          <div className="px-5 py-5">
            <img className="img" src={blog1}
             style={{
              borderRadius: "25px",
              overflow: 'hidden'
          }}
            />
          </div>

          <div className="px-5 py-5">
            <img className="img" src={blog2}
             style={{
              borderRadius: "25px",
              overflow: 'hidden'
          }}
            />
          </div>

          <div className="px-5 py-5">
            <img className="img" src={blog3}
             style={{
              borderRadius: "25px",
              overflow: 'hidden'
          }}
            />
          </div>
          <div className="px-5 py-5">
            <img className="img" src={blog4}
             style={{
              borderRadius: "25px",
              overflow: 'hidden'
          }}
            />
          </div>
          <div className="px-5 py-5">
            <img className="img" src={blog5}
             style={{
              borderRadius: "25px",
              overflow: 'hidden'
          }}
            />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default QuotesOwl;
