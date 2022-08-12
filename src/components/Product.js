import React from "react";

// redux
import { useDispatch } from "react-redux";

// router
import { Link } from "react-router-dom";

import { toggleFavoriteProduct } from "../redux/actions/favoriteProductsAction";

import { cartAction } from "../redux/actions/cartAction";

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
     onClick={() => props.toggleFavorite(props.product)}
    ></i>
   );
  } else {
   return (
    <i
     className="ri-heart-line ri-fw ri-2x"
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
  <div className="content">
   {/* onClick={() => dispatch(toggleFavoriteProduct(props.product))} */}
   {/* <div
    className="favorite-icon"
    onClick={() => props.toggleFavorite(props.product)}
   >
    <i className="ri-heart-line ri-fw ri-2x"></i>
   </div> */}
   <div className="favorite-icon">{getFavoriteIcon()}</div>
   <Link to={`/product/${id}`}>
    <img src={image} style={{ height: "200px" }} alt="" />
    <h3>{title}</h3>
    <p>{description}</p>
    <h6>
     <span>&#x20b9;</span>
     {price}
    </h6>
   </Link>
   <button
    className={isAddedToCart ? "remove-from-cart" : "add-to-cart"}
    onClick={() => props.toggleCart(props.product)}
   >
    {getButtonText()}
   </button>
  </div>
 );
};

export default Product;
