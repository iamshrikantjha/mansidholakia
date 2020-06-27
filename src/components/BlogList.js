import React from "react";
import Blog from "./Blog";

import blog1 from './../assets/images/blog_1.png'
import blog2 from './../assets/images/blog_2.png'
import blog3 from './../assets/images/blog_3.png'
import blog4 from './../assets/images/blog_4.png'
import blog5 from './../assets/images/blog_5.png'

const BlogList = () => {
  return (
    <>
      <div className="columns is-centered has-background-white px-0 py-0">
        <div className="field is-marginless is-hidden-mobile bloglist-mid has-background-warning">
          <div className="control bloglist-mid has-background-light">
          </div>
          <div className="control bloglist-mid">
          </div>
        </div>
      
        <div className="column is-6-desktop is-9-tablet is-12-mobile px-0 py-0 bloglist-front">
          <div className="columns is-centered is-multiline is-marginless">
            <Blog iurl={blog1} />
            <Blog iurl={blog2} />
            <Blog iurl={blog3} />
            <Blog iurl={blog4} />
            <Blog iurl={blog5} />
            <Blog />
          </div>
        </div>
      </div>


      <div className="columns is-centered my-6 has-text-centered">
        <button
          className="button is-dark is-rounded">
          Read More
        </button>
      </div>
    </>
  );
};

export default BlogList;
