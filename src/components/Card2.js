import React from "react";

const Card2 = () => {
  return (
    <>
      {/* Outer Desktop */}
      <div className="columns has-background-light is-centered abstry2 is-marginless is-gapless" style={{
        marginTop: "500px",
        margin: "500px"
      }}>
        {/* Absolute Trick */}
        {/* <div className="field is-marginless is-hidden-mobile cf-card has-background-warning">
          <div className="control cf-card has-background-light">
          </div>
          <div className="control cf-card has-background-light">
          </div>
        </div> */}

        {/* Inner */}
        <div className="column is-desktop-only has-background-white abstry is-6-desktop is-9-tablet px-0 py-0">
          {/* Inner */}
          <div className="columns is-gapless px-0 py-0 mx-0 my-0">
            {/* Image */}
            <div className="column has-background-white">
              <figure className="image  has-background-warning">
                <img src="https://pbs.twimg.com/media/Dt-TGF0WwAAs3dh.jpg" />
              </figure>
            </div>
            {/* Text */}
            <div className="column has-background-white px-6 pt-1 py-5">
              <div className="container px-6 pt-1 py-5">
                <div className="title serif has-text-weight-bold">
                  Meet Mansi
                </div>
                <div className="lato has-text-dark">
                  Motivational speaker #1 & career counsellor Entrepreneur, Best
                  selling author.
                </div>
                <div className="is-size-7-touch is-size-7-mobile mt-3 lato">
                  Mansi is a london based entrepreneur, a pharmacologist and a
                  passionate mental health advocate. She has graduated in
                  pharmacy from University of Brighton, Certified in psychology
                  from University of Cambridge, she is an expert speaker, a well
                  known author and a poet.
                </div>
                {/* Button */}
                <div>
                  <a className="button is-normal lato mt-5 is-success is-rounded has-text-weight-semibold">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
