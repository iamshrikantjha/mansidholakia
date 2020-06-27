import React from "react";

const Hero2 = (props) => {
  return (
    <>
      <section class={`hero is-${props.color} is-medium`}>
        <div className="hero-body">
          <div className="container">
            <div className="column is-5-desktop is-12-mobile">
              <h1 className=" font_0 is-size-3-mobile bgGreen has-text-dark">{props.title} </h1>
              <h2 className="is-size-6 lato cf-card-info container is-5-desktop lato">{props.para}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
