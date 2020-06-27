import React from "react";

const Engage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-body has-background-info">
          <div className="container has-text-centered">
            {/* Main Text */}
            <div className="is-size-1 has-text-white is-size-3-mobile has-text-weight-bold mt-6 mb-5 serif">
              Let's Engage
            </div>
            {/* Conatct */}
            <div className="is-size-6 has-text-white lato">
              Phone Number: 123-456-7890 / Email: info@mysite.com
            </div>

            {/* Icons */}
            <div className="columns my-5 is-mobile is-6 is-marginless is-centered">
              {/* Icon */}
              <div className="column is-1-desktop is-2-mobile cf-icon-color">
                <i className="fab fa-facebook-f fa-2x"></i>
              </div>
              <div className="column is-1-desktop is-2-mobile cf-icon-color">
                <i className="fab fa-twitter fa-2x"></i>
              </div>
              <div className="column is-1-desktop is-2-mobile cf-icon-color">
                <i className="fab fa-youtube fa-2x"></i>
              </div>
              <div className="column is-1-desktop is-2-mobile cf-icon-color">
                <i className="fab fa-instagram fa-2x"></i>
              </div>
              <div className="column is-1-desktop is-2-mobile cf-icon-color">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>

            {/* Form */}

            <div className="columns is-centered is-mobile is-marginless">
              <div className="column is-8-desktop">
                <div className="columns">
                  {/* Name */}
                  <div className="control column">
                    <input className="input" type="text" placeholder="Name" />
                  </div>
                  {/* Email */}
                  <div className="control column">
                    <input className="input" type="text" placeholder="Email" />
                  </div>
                  {/* Phone */}
                  <div className="control column">
                    <input className="input" type="text" placeholder="Phone" />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered has-background-info is-marginless">
              <div className="column is-8-desktop">
                <textarea
                  className="textarea"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
            </div>
            {/* Button */}
            <div className="columns is-centered has-background-info is-marginless">
              <div className="column is-8-desktop">
              <button className="button is-primary is-rounded">Submit</button>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engage;
