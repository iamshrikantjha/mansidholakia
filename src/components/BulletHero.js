import React from "react";
// import heroimage from "./../assets/images/darren.jpg";

const BulletHero = (props) => {
  return (
    <>
      <div className="container">
        <div
          className="hero is-medium"
          style={{
            backgroundImage: `url(${props.imageu})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Head */}
          <div className="hero-head">{/* <BulletsNav /> */}</div>
          {/* Medium */}
          <div className="section">
            <div className="hero-body">
              <div className="container has-text-centered">
                {/* <div className="column ml-4 font_0 is-size-2-mobile bgGreen-t">Successful You! */}
                <h1 className="animate__animated animate__bounce  title is-size-3-mobile is-size-1-tablet is-size-1-desktop serif has-background-custom-fit px-0 mx-0 py-0 my-5">
                {props.imgtext}
                </h1>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletHero;
