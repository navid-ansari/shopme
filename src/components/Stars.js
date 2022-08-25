import React, { useState, useEffect } from "react";

import Star from "./Star";

const Stars = (props) => {
 console.log(props);
 const [starCount, setStarCount] = useState([]);

 const generateStars = async (rating) => {
  const stars = Math.ceil(rating);
  const array = [];
  for (let i = 0; i < stars; i++) {
   array.push(i);
  }
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
