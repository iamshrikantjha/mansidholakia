import React from "react";
import BulletsNav from "../components/BulletsNav";
import Bullet from "../components/Bullet";
import Axios from 'axios';

const Bullets = (props) => {

  React.useEffect(async () => {
    await Axios.get("https://3.6.126.134:8000/blogs/").then((response) => {
      console.log(`I am content`);
      console.log(response.data);
      // setCat(response.data);
      return () => {
        console.log("This will be logged on unmount");
      };
    });
  }, []);

  return (
    <>
        <BulletsNav />
        <Bullet />
    </>
  );
};

export default Bullets;
