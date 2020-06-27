import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ModalVideo from 'react-modal-video'
import heroimage from './../assets/images/hero3.jpg';
// // import Card2 from "./Card2";
// import herovideo from './../assets/video/myvideo.mp4';
// 'file:///home/shrikantjha/Desktop/Dev/reactjs/naomi/src/assets/video/myvideo.mp4'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalVideo channel='youtube' isOpen={isOpen} autoplay={true} onClose={() => setIsOpen(false)} videoId='OnRWz_q3TAM' />

      <div className="hero is-fullheight is-large" style={{
        backgroundImage: `url(${heroimage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      

        {/* Head */}
        <div className="hero-head">
          <Navbar />
        </div>
        {/* <Card2 /> */}
        {/* Medium */}
        <div className="hero-body">
          <div className="container has-text-centered mt-100">
            <h1 className="is-uppercase subtitle mb-6 lato is-size-5-mobile is-size-5-touch has-text-dark">Become the most</h1>


            <div className="columns is-centered">
              {/* <div className="column ml-4 font_0 is-size-2-mobile bgGreen-t">Successful You! */}
              <h2 className="my-6 font_0 has-text-centered is-size-2-mobile ml-5 has-text-dark bgGreen">Successful You!</h2>
          
              {/* </div> */}
            </div>


            {/* Icons */}
            <div className="columns my-6 is-marginless is-mobile is-centered">
              <div className="column is-1-desktop is-2-mobile">
                <i className="fab fa-facebook-f fa-2x"></i>
              </div>
              <div className="column is-1-desktop is-2-mobile">
                <i className="fab fa-twitter fa-2x"></i>
              </div>
              <div className="column is-1-desktop is-2-mobile">
                <i className="fab fa-youtube fa-2x"></i>
              </div>
              <div className="column is-1-desktop is-2-mobile">
                <i className="fab fa-instagram fa-2x"></i>
              </div>
              <div className="column is-1-desktop is-2-mobile">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>

            {/* Buttons */}
            <a className="button is-danger is-rounded lato my-5" onClick={()=>{setIsOpen(true)}}>Start your Journey</a>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
