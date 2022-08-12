import React, { useEffect, useState } from "react";

// component
import Stars from "../components/Stars";

const Favorite = (props) => {
 const { category, description, id, image, price, rating, title } =
  props.favorite;
 const { rate, count } = rating || {};

 return (
  <div className="product">
   <div className="left-column">
    <img src={image} alt="" />
   </div>
   <div className="right-column">
    <h2 className="product-title">{title}</h2>
    <div className="product-description">
     <span className="decription">Description: </span>
     <span className="description-text">{description}</span>
    </div>
    <div className="product-rating">
     <span className="rating">Rating: </span>
     <span className="rating-stars">
      <Stars rating={rate} />
     </span>
    </div>
    <div className="product-review">
     <span className="reviews">Reviews: </span>
     <span className="total-reviews">{count} reviews</span>
    </div>
    <div className="product-price">
     <span className="price">Price: </span>
     <span className="total-price">&#x20b9; {price}</span>
    </div>
   </div>
  </div>
 );
};

export default Favorite;
