import React from "react";

const Featured = () => {
  return (
    <>
      {/* Button */}

      <div className="hero has-background-info">
        <div className="hero-body is-centered has-text-centered">
          <a className="button my-6 is-rounded is-success">See All Services</a>

          <div className="columns mt-6 is-marginless">
            <div className="column">
              <i className="fas fa-hands-helping fa-4x i-color"></i>
            </div>
            <div className="column">
            <i className="fas fa-theater-masks fa-4x i-color"></i>
            </div>
            <div className="column">
              <i className="fas fa-book fa-4x i-color"></i>
            </div>
            <div className="column">
              <i className="fab fa-accusoft fa-4x i-color"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
