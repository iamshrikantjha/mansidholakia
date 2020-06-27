import React from "react";

const Inspiration = () => {
  return (
    <>
      {/* Visible Desktop */}
      <div className="columns is-centered is-marginless">
        {/* Absolute Trick */}
        <div className="field is-marginless bloglist-mid is-hidden-mobile">
          <div className="control cf-inspiration-mid has-background-white"></div>
          <div className="control cf-inspiration-mid has-background-info"></div>
        </div>

        <div className="column cf-inspiration-front is-6-desktop is-9-tablet has-background-light">
          {/* Inner */}
          <div className="hero">
            <div className="hero-body is-centered is-mobile">
              <div className="container  has-text-centered ">
                <div className="title serif">Inspiration Meetup with Naomi</div>
                <div className="lato">
                  I'm a tagline. Click here to add your own text and edit me.
                </div>
                <div className="mt-5 lato">1 hr</div>
                <div className="lato">$80</div>
                <div className="mt-5 lato">Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visible Mobile */}
      {/* <div className="columns has-background-primary is-marginless is-hidden-desktop">
        <div className="column is-6-desktop is-offset-3 has-background-light"> */}
      {/* Inner */}
      {/* <div className="hero">
            <div className="hero-body is-centered is-mobile">
              <div className="container  has-text-centered ">
                <div className="title serif">Inspiration Meetup with Naomi</div>
                <div className="lato">
                  I'm a tagline. Click here to add your own text and edit me.
                </div>
                <div className="mt-5 lato">1 hr</div>
                <div className="lato">$80</div>
                <div className="mt-5 lato">Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Inspiration;
