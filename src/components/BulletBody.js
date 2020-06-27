import React from "react";

const BulletBody = (props) => {
  return (
    <>
      <div className="section">
        <div className="columns is-centered is-marginless">
          <div className="column is-6-desktop is-9-tablet">
            {/* Content */}
            <div className="title is-size-2-desktop has-text-dark has-text-weight-semibold has-background-custom-fit serif">
              {props.title}
              {/* 5 ways to disengage yourself from the negative thoughts. */}
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: props.content
              }}></div>
            {/* {props.content} */}
             </div>
        </div>
      </div>
    </>
  );
};

export default BulletBody;



// <h2 className="is-size-5-desktop is-size-3-tablet my-6 lato">
//               1. When you talk to yourself about a stressful situation, try and
//               disengage your thoughts to how the outcome affects you. Whatever
//               be the outcome of the situation, you are capable enough to deal
//               with that. Say that to yourself.
//             </h2>
//             <h2 className="is-size-5-desktop is-size-3-tablet my-6 lato">
//               2. There will always be someone who will be happy in your
//               successes and there will always be someone who will be happy when
//               you fail. There are all kinds of people in this world. So another
//               person’s perception about you, cannot be a defining factor for
//               your growth or happiness. Take control of your inner peace.
//             </h2>
//             {/* Image */}
//             <div className="columns is-marginless ">
//               {/* 1. Image */}
//               <div className="column">
//                 <img src="https://radiustheme.com/demo/html/blogxer/blogxer/img/blog/blog219.jpg"
//                  />
//               </div>
//               {/* 2. Image */}
//               <div className="column">
//                   <img src="https://radiustheme.com/demo/html/blogxer/blogxer/img/blog/blog220.jpg"
//                    />
//               </div>
//             </div>
//             {/* Image */}

//             <h2 className="is-size-5-desktop is-size-3-tablet my-6 lato">
//               3. When the anxious thoughts start to arise, accept that and talk
//               to your mind that we will figure out a solution. Everything is not
//               okay right now, but it will be. Accepting the anxiousness is a
//               part of dealing with it. Once you accept it, your mind will stop
//               challenging you and you will be able to process a solution based
//               outcome.
//             </h2>
//             <h2 className="is-size-5-desktop is-size-3-tablet my-6 lato">
//               4. Be definitive in defining what your inner peace means to you.
//               Read positive things. Surrounding yourself with people who believe
//               in you and are encouraging is a huge step in that direction.
//             </h2>
//             <h2 className="is-size-5-desktop is-size-3-tablet my-6 lato">
//               5. Divert your mind to something that helps you change your
//               thought process. It is not easy while dealing with anxious
//               thoughts. But talking to someone else usually helps. It shifts
//               your attention to the things happening in other people’s lives and
//               you will forget your qualms for the time being.
//             </h2>
         