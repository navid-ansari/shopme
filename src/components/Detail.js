import React from "react";

// component
import Stars from "../components/Stars";

export const Detail = (props) => {
 const { category, description, id, image, price, rating, title } =
  props.product;

 const { rate, count } = rating || {};

 return (
  <div className="product" data-testid="product">
   <div className="left-column">
    <img src={image} alt="" />
   </div>
   <div className="right-column">
    <h2 className="product-title" data-testid="product-title">
     {title}
    </h2>
    <div className="product-description">
     <span className="decription" data-testid="decription-title">
      Description:
     </span>
     <span className="description-text" data-testid="decription-text">
      {description}
     </span>
    </div>
    <div className="product-rating">
     <span className="rating" data-testid="rating-title">
      Rating:
     </span>
     <span className="rating-stars">
      <Stars rating={rate} />
     </span>
    </div>
    <div className="product-review">
     <span className="reviews" data-testid="reviews-title">
      Reviews:
     </span>
     <span className="total-reviews" data-testid="reviews-count">
      {count} reviews
     </span>
    </div>
    <div className="product-price">
     <span className="price" data-testid="price-title">
      Price:
     </span>
     <span className="total-price" data-testid="price-value">
      &#x20b9; {price}
     </span>
    </div>
   </div>
  </div>
 );
};

export default Detail;
