import React from "react";

const BulletAuthor = () => {
  return (
    <>
      <div className="section">
        <div className="columns is-centered is-marginless">
          <div className="column is-6-desktop is-9-tablet">
            {/* Author */}
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      src="https://pbs.twimg.com/media/Dt-TGF0WwAAs3dh.jpg"
                      alt="Image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content lato">
                    <p>
                      <strong className="has-background-custom-fit serif  has-text-dark">Mansi Dholakia</strong>
                      <div>
                        <small>1 minute read</small>
                      </div>
                      <br />
                      She has dedicated 15 years of her service to healthcare
                      domain. Her exemplary work in mental health sector has won
                      her accolades world-wide. 
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletAuthor;
