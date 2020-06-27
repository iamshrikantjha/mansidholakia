import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ModalVideo from "react-modal-video";
import Axios from "axios";
import Loader from 'react-loader-spinner'

// import heroimage from "./../assets/images/darren.jpg";
import BulletsNav from "./BulletsNav";
import BulletHero from "./BulletHero";
import BulletBody from "./BulletBody";
import Subscribe from "./Subscribe";
import BulletAuthor from "./BulletAuthor";
import heroimage from "./../assets/images/hero.jpg";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
} from "react-router-dom";

const Bullet = (props) => {
  const [active, setActive] = useState(true);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [url, setUrl] = useState(heroimage);
  let location = useLocation();

  useEffect(() => {
    async function getData() {
      console.log(`Ready to get some data`);
      const { data } = location;

      console.log(`Info up above`);

      await Axios.get(
        `http://3.6.126.134:8000/blogs/${data.id}/${data.slug}/`
      ).then((response) => {
        console.log(response);
        console.table(response.data);
        console.log(`I am content`);
        console.log(response.data[0].content);
        setTitle(response.data[0].title);
        setContent(response.data[0].content);
        setUrl(data.url);
        setActive(false);

        return () => {
          console.log("This will be logged on unmount");
        };
      });
    }

    // Code
    const cat_id = localStorage.getItem(`cat_id`);
    const blog_slug = localStorage.getItem(`blog_slug`);
    console.log(`Category ID here`);
    console.log(cat_id);
    console.log(`Blog slug here`);
    console.log(blog_slug);
    if (blog_slug === null || cat_id === null) {
    getData();
    }
    else
    {
      async function getData() {
  
        await Axios.get(
          `http://3.6.126.134:8000/blogs/${cat_id}/${blog_slug}/`
        ).then((response) => {
          console.log(response);
          console.table(response.data);
          console.log(`I am content`);
          console.log(response.data[0].content);
          setTitle(response.data[0].title);
          setContent(response.data[0].content);
          setUrl(localStorage.getItem(`cover_url`));
          setActive(false);
  
          return () => {
            console.log("This will be logged on unmount");
          };
        });
      }
      getData();
    }

  }, []);

  return (
    <>
      <BulletsNav />
      {
        active === false ? (<div><BulletHero
          imageu={url}
          imgtext="“Start your day with why, then get on with your what.”"
        />
  
        <BulletBody title={title} content={content} />
        <BulletAuthor /></div>):(
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
            
                />
            </div>
          </div>
        </div>
        )
      }
      
      <Subscribe />
    </>
  );
};

export default Bullet;
