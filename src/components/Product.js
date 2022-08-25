import React from "react";

// redux
import { useDispatch } from "react-redux";

// router
import { Link } from "react-router-dom";

import { toggleFavoriteProduct } from "../redux/actions/favoriteProductsAction";

import { cartAction } from "../redux/actions/cartAction";
import { useState } from "react";

const Product = (props) => {
 const {
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
  isFavorite,
  isAddedToCart,
  toggleFavorite,
  toggleCart,
 } = props.product;
 const dispatch = useDispatch();

 const getFavoriteIcon = () => {
  if (isFavorite) {
   return (
    <i
     className="ri-heart-fill ri-fw ri-2x"
     data-testid="toggle-favorite"
     onClick={() => props.toggleFavorite(props.product)}
    ></i>
   );
  } else {
   return (
    <i
     className="ri-heart-line ri-fw ri-2x"
     data-testid="toggle-favorite"
     onClick={() => props.toggleFavorite(props.product)}
    ></i>
   );
  }
 };

 const getButtonText = () => {
  if (isAddedToCart) {
   return "Remove From Cart";
  } else {
   return "Add To Cart";
  }
 };

 return (
  <div className="content" id="content" data-testid="content">
   <div className="favorite-icon" data-testid="favorite-icon">
    {getFavoriteIcon()}
   </div>
   <Link to={`/product/${id}`}>
    <img
     src={image}
     style={{ height: "200px" }}
     alt=""
     data-testid="product-image"
    />
    <h3 data-testid="product-title">{title}</h3>
    <p data-testid="product-description">{description}</p>
    <h6 data-testid="product-price">
     <span>&#x20b9;</span>
     {price}
    </h6>
   </Link>
   <button
    className={isAddedToCart ? "remove-from-cart" : "add-to-cart"}
    data-testid="add-to-cart-btn"
    onClick={() => props.toggleCart(props.product)}
   >
    {getButtonText()}
   </button>
  </div>
 );
};

export default Product;
