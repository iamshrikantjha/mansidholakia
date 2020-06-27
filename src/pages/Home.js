import React from "react";

import Hero from "./../components/Hero";
import Card from "./../components/Card";
import Card2 from "./../components/Card2";
import Hero2 from "./../components/Hero2";
import BlogList from "./../components/BlogList";
import Inspiration from "./../components/Inspiration";
import Featured from "./../components/Featured";
import Testimonials from "./../components/Testimonials";
import Engage from "./../components/Engage";
import Subscribe from "./../components/Subscribe";
import QuotesOwl from "../components/QuotesOwl";
import Podcast from "../components/Podcast";

const Home = () => {
  return (
    <>
      <Hero />
      <QuotesOwl />
      <Card />
      {/* <Card2 /> */}
      <Hero2
        title="From My Blog"
        color="light"
        para="Apart from winning awards and medals, she has foremost won hearts across the world for her selfless dedication and service."
      />
      <BlogList />
      <Hero2 title="Start Your Journey" color="white" para="" />
      <Inspiration />
      <Featured />
      <Podcast />
      <Testimonials />
      <Engage />
      <Subscribe />
    </>
  );
};

export default Home;
