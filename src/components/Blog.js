import React from "react";
import image from './../assets/images/blog_1.png'

const Blog = (props) => {
  return (
    <>
      {/* <div
        className={`column is-6-desktop is-6-tablet has-background-${props.color} px-4 py-4`}
      >
        <div className="px-2 py-2">
          <div className="is-size-7">.</div>
          <div className="is-size-7">May 18 2 min</div>
          <div className="subtitle blog">
            How Can You Turn Failures into Opportunities
          </div>
          <hr className="has-background-dark" />

          <div className="level">
            <div className="level-left is-size-7">0 views Write a comment</div>
            <div className="level-right">
              <i className="far fa-heart"></i>
            </div>
          </div>
        </div>
      </div> */}

      <div className={`column is-6-desktop is-6-tablet has-background-${props.color} px-5 py-5`}>
        <img src={props.iurl} 
         style={{
          borderRadius: '20px',
          overflow: 'hidden',
        }}
        />
      </div>

    </>
  );
};

export default Blog;
