import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="hero has-background-light is-centered">
          {/* Inner */}
        <div className="hero-body container">
            <div className="subtitle has-text-weight-semibold serif has-background-custom-fit has-text-dark">
            For Daily Motivation
            </div>
            {/* Form */}
            <div className="columns is-marginless is-centered">
                {/* Input */}
                <div className="column is-9">
                <input className="input is-small" type="text" placeholder="Enter your email here*" />
                </div>
                {/* Button */}
                <div className="column is-4 ">
                <button className="button is-small is-danger lato">Subscribe Now</button>
                </div>
                
            </div>
            {/* Link */}
            <div className="my-5 is-size-7 has-text-weight-semibold lato">
                © 2020 by Pritesh. Made in India ❤️
            </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
