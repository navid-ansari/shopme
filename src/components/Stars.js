import React, { useState, useEffect } from "react";

import Star from "./Star";

const Stars = (props) => {
 console.log(props);
 const [starCount, setStarCount] = useState([]);

 const generateStars = async (rating) => {
  //console.log(rating);
  const stars = Math.ceil(rating);
  const array = [];
  for (let i = 0; i < stars; i++) {
   //console.log("loop: " + i);
   array.push(i);
  }
  //console.log(array);
  return array;
 };

 useEffect(() => {
  (async () => {
   const totalStars = await generateStars(props.rating);
   setStarCount(totalStars);
  })();
 }, [props.rating]);

 const starElem = starCount.map((star) => <Star key={star} />);

 return (
  <div className="stars" data-testid="stars">
   {starElem}
  </div>
 );
};

export default Stars;
