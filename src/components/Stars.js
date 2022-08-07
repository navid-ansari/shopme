import React, { useState, useEffect } from "react";

import Star from "./Star";

const Stars = (props) => {
 const [starCount, setStarCount] = useState([]);

 useEffect(() => {
  if (props.rating > 0) {
   const stars = Math.ceil(props.rating);
   const starArray = (starCount) => {
    const array = [];
    for (let i = 0; i < starCount; i++) {
     array.push(i);
    }
    return array;
   };
   const totalStart = starArray(stars);
   setStarCount((prevCount) => totalStart);
  }
 }, [props.rating]);

 const starElem = starCount.map((star) => <Star key={star} />);

 return <>{starElem}</>;
};

export default Stars;

/*(async () => {
   const totalStart = await starArray(stars);
   setStarCount((prevCount) => {
    return [...totalStart];
   });
  })();*/
