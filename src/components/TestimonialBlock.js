import React from "react";

const TestimonialBlock = (props) => {
  return (
    <>
      <div className="column">
        <div className="columns has-text-centered">
          <div className="column">
            <div className="hero">
              <div className="hero-body is-centered has-text-centered">
                {/* Image */}
                <img
                  src={`${props.url}`}
                  width="100%"
                />
                <div className="is-size-6 my-4 py-4 px-4 lato is-italic">
                  {props.think}
                </div>
                <div className="is-size-5 has-text-weight-bold serif my-6">
                  {props.name}
                  <br />
                  {props.company}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialBlock;
