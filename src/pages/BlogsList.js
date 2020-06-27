import React, { useState } from "react";
import BulletsNav from "../components/BulletsNav";
import BulletHero from "../components/BulletHero";
import heroimage from "./../assets/images/hero.jpg";
import BulletCard from "../components/BulletCard";
import Subscribe from "../components/Subscribe";
import Axios from "axios";
import Loader from 'react-loader-spinner'

import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
} from "react-router-dom";

import BulletAuthor from "../components/BulletAuthor";

const BlogsList = (props) => {
  const [active, setActive] = useState(true);
  const [blogid, setBlogid] = useState("");
  const [blogs, setBlogs] = useState([]);

  let location = useLocation();
  console.log("====================================");
  const { data } = location;

  // console.log(data.id);
  console.log("====================================");

  React.useEffect(() => {
    async function getData() {
      const cat_id = localStorage.getItem(`cat_id`);
      console.log(`Category ID here`);
      console.log(cat_id);
      if(!cat_id)
      {
        console.log('====================================');
        console.log(`I am in not section`);
        console.log('====================================');
        localStorage.setItem(`cat_id`, data.id);
        setBlogid();
        setBlogid(data.id);
        await Axios.get(`https://3.6.126.134:8000/blogs/`+`${data.id}`).then((response) => {
        console.log(`I am content`);
        console.log(response);
        setBlogs(response.data);
        setActive(false);
        // console.log(blogs);
        return () => {
          console.log("This will be logged on unmount");
        };
      });
      }
      else
      {
        console.log('====================================');
        console.log(`I am in yes local section`);
        console.log('====================================');
        await Axios.get(`https://3.6.126.134:8000/blogs/`+`${cat_id}`).then((response) => {
        console.log(`I am content local storage ${cat_id}`);
        console.log(response);
        setBlogs(response.data);
        setActive(false);

        // console.log(blogs);
        return () => {
          console.log("This will be logged on unmount");
        };
      });
      }
      
    }
    getData();
  }, []);

  // const { id } = this.props.location;

  return (
    <>
      <BulletsNav />
      {
        active === false ? (
        <div>
        <BulletHero imageu={heroimage} imgtext="Blogs" />
        <div className="columns is-centered is-marginless">
          {/* InnerColumn */}
          <div className="column is-6-desktop">
            {/* Card 1 */}
            <div className="container my-6">
              {blogs.map((blogs) => {
                return (
                  <BulletCard
                    url={blogs.cover}
                    title={blogs.title}
                    description={blogs.description}
                    date={blogs.date}
                    slug={blogs.slug}
                    id={blogs.blogCategory}
                  />
                );
              })}
            </div>
          </div>
        </div></div>):(
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

export default BlogsList;

{
  /* <BulletCard
            url="https://youberelentless.com/wp-content/uploads/2016/12/learnfa-hardy.jpg"
            text="Productivity to the next level"
            content="Darren Hardy is an American author, keynote speaker,
                    advisor, and former publisher of SUCCESS magazine..."
          />
          <BulletCard
            url="https://i.ytimg.com/vi/Q4s_0pNZvnc/maxresdefault.jpg"
            text="From College Dropout To The Richest Man In The World"
            content="William Henry Gates III is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation.."
          />
          <BulletCard
            url="https://eximomarketingstrategy.com/wp-content/uploads/Gary_Vaynerchuk_Internet_Week_2015_in_New_York_May_19_2015.jpg"
            text="From College Dropout To The Richest Man In The World"
            content="William Henry Gates III is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation.."
          /> */
}

{
  /* <BulletCard
              url="https://youberelentless.com/wp-content/uploads/2016/12/learnfa-hardy.jpg"
              text="Productivity to the next level"
              content="Darren Hardy is an American author, keynote speaker,
                    advisor, and former publisher of SUCCESS magazine..."
            />
            <BulletCard
              url="https://i.ytimg.com/vi/Q4s_0pNZvnc/maxresdefault.jpg"
              text="From College Dropout To The Richest Man In The World"
              content="William Henry Gates III is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation.."
            />
            <BulletCard
              url="https://eximomarketingstrategy.com/wp-content/uploads/Gary_Vaynerchuk_Internet_Week_2015_in_New_York_May_19_2015.jpg"
              text="From College Dropout To The Richest Man In The World"
              content="William Henry Gates III is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation.."
            />
            <BulletCard
              url="https://pbs.twimg.com/media/Dt-TGF0WwAAs3dh.jpg"
              text="Spread your wings"
              content="Spread your wings is about exploring the depth of human emotions through poetry. This book takes you on a poignant journey of experiencing different kinds of emotions at various stages in your life. Each of us as individuals, understand and feel 
              the emotions in a very distinctive kind of way..."
            /> */
}
