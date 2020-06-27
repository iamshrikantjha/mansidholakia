import React, { useState } from "react";
import BulletsNav from "./../components/BulletsNav";
import BulletHero from "./../components/BulletHero";
// import heroimage from "./../assets/images/darren.jpg";
import heroimage from "./../assets/images/hero.jpg";
import BulletCard from "./../components/BulletCard";
import Subscribe from "./../components/Subscribe";
// import BulletAuthor from "./../components/BulletAuthor";
import Axios from "axios";
import CatCard from "../components/CatCard";

const Categories = (props) => {
  const [category, setCat] = useState([]);
  React.useEffect(() => {
    async function getdata() {
      await Axios.get("http://3.6.126.134:8000/blogs/").then((response) => {
        console.log(`I am content`);
        console.log(response.data);
        setCat(response.data);
        return () => {
          console.log("This will be logged on unmount");
        };
      });
    }

    getdata();
  }, []);

  return (
    <>
      <BulletsNav />
      <BulletHero imageu={heroimage} imgtext="Categories" />
      <div className="columns is-centered is-marginless">
        {/* InnerColumn */}
        <div className="column is-6-desktop">
          {/* Card 1 */}
          <div className="container my-6">
            {category.map((item, index) => {
              return (
                <CatCard
                  url={category[index].cover}
                  text={category[index].title}
                  content={category[index].description}
                  id={category[index].id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Categories;

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
