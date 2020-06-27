import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BulletCard = (props) => {

  const blogDetails = async() => {
    localStorage.setItem(`blog_slug`, props.slug);
    localStorage.setItem(`cover_url`, props.url);
  }

  return (
    <>
      <div className="my-6">
        <Link
          className="container"
          onClick={()=> blogDetails()}
          to={{
            pathname: `/blog`,
            data: { 
              id: props.id,
              url: props.url,
              slug: props.slug,
             },
          }}
        >
          {/* Read This */}
          <div className="title is-size-5">Read This</div>
          {/* Inner Two */}
          <div className="columns is-marginless is-gapless">
            {/* Image */}
            <div className="column is-7">
              <figure className="image is-4by3">
                <img
                  resizeMode={"cover"}
                  style={{ width: "100%", borderRadius: "15px" }}
                  src={`${props.url}`}
                />
              </figure>
            </div>
            {/* Info */}
            <div className="column">
              <div className="container px-3 mt-3">
                <div className="title lato is-size-3-desktop is-size-4-mobile has-text-weight-bold has-background-custom-fit px-1 py-1 is-uppercase">
                  {props.title}
                </div>
                <hr
                  style={{
                    backgroundColor: "black",
                    borderWidth: "3",
                  }}
                />
                <div className="px-3 lato">
                  {/* Time */}
                  <div className="is-size-6 has-text-weight-bold is-italic">
                    {/* 7 months ago {"     "} 2 minute read */}
                    {props.date}
                  </div>
                  {/* Text */}
                  <div className="is-size-6 lato">
                    <br />
                    {props.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BulletCard;
