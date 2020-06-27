import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import PodcastCard from "./PodcastCard";
import Axios from "axios";
import ModalVideo from 'react-modal-video'

const PodcastOwl = () => {
  const [pods, setPods] = useState([]);
  const [owlsize, setOwlsize] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function getdata() {
      await Axios.get(`https://3.6.126.134:8000/podcasts/`).then((response) => {
        console.log(`I am podcast`);
        console.log(response.data.length);
        setPods(response.data);
        let l = response.data.length;
        setOwlsize(l);
        console.log("====================================");
        console.log(owlsize);
        console.log(owlsize);
        console.log(owlsize);
        console.log("====================================");
        return () => {
          console.log("This will be logged on unmount");
        };
      });
    }

    getdata();
  }, []);

  return (
    <>
      <ModalVideo channel='youtube' isOpen={isOpen} autoplay={true} onClose={() => setIsOpen(false)} videoId='OnRWz_q3TAM' />

      <div className="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }}>
          <div className="col-sm-12 btn btn-info">
            {/* Owl Carousel In React Application */}
          </div>
        </div>
      </div>

      <div className="container-fluid" onClick={()=>{setIsOpen(true)}}>
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
              items: 3,
            },
          }}
          dots={false}
          autoWidth={false}
          autoplayHoverPause={true}
          autoplay={true}
          autoplayTimeout={4000}
          items={owlsize}
          // items={owlsize}
          className="owl-theme"
          loop
          nav
          margin={8}
        >
          {pods.map((pods) => {
            return (
              <PodcastCard
                url={pods.cover}
                title={pods.title}
                description={pods.description}
                slug={pods.slug}
              />
            );
          })}
        </OwlCarousel>
      </div>
    </>
  );
};

export default PodcastOwl;

{
  /* <div className="px-5 py-5">
            <img
              className="img"
              src={
                "https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/15bb37f0967bd819b9be114df644f7bf/assets/jywfxdii4uwscesuhw5i1gdmwwemilw6.jpg"
              }
              style={{
                borderRadius: "25px",
                overflow: "hidden",
              }}
            />
          </div>

          <div className="px-5 py-5">
            <img
              className="img"
              src={
                "https://www.visme.co/wp-content/uploads/2020/02/i_Adventure-Youtube-Video-Cover_full.jpg"
              }
              style={{
                borderRadius: "25px",
                overflow: "hidden",
              }}
            />
          </div>

          <div className="px-5 py-5">
            <img
              className="img"
              src={blog1}
              style={{
                borderRadius: "25px",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="px-5 py-5">
              <div>

              </div>
            <img
              className="img"
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJn5MUMCZ1YBW-hk8EhjMffEac4T0I4WD9aO9O4CLLJN2_UXIn&usqp=CAU'}
              style={{
                borderRadius: "25px",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="px-5 py-5">
            <img
              className="img"
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkm9Ld3lSCuMaTQYw5JNzFYLOZ39Av3q9ri2JMNPq0xTc9Zwrg&usqp=CAU'}
              style={{
                borderRadius: "25px",
                overflow: "hidden",
              }}
            />
          </div>
        
         */
}
