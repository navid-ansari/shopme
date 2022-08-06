import React, { useState, useEffect } from "react";

import Star from "./Star";

const Stars = (props) => {
 const [starCount, setStarCount] = useState([]);
 const stars = Math.ceil(props.rating);

 useEffect(() => {
  //console.log("Start Use Effect");
  const starArray = (starCount) => {
   const array = [];
   for (let i = 0; i < starCount; i++) {
    array.push(i);
   }
   return array;
  };
  const totalStart = starArray(stars);
  setStarCount((prevCount) => totalStart);

  /*(async () => {
   const totalStart = await starArray(stars);
   setStarCount((prevCount) => {
    return [...totalStart];
   });
  })();*/
 }, []);

 //console.log(props.rating);
 const starElem = starCount.map((star) => <Star key={star} />);

 return <>{starElem}</>;
};

export default Stars;
