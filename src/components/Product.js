import React, { useEffect } from "react";

// redux
import { useDispatch } from "react-redux";

// router
import { Link } from "react-router-dom";

import { toggleFavoriteProduct } from "../redux/actions/favoriteProductsAction";

import { cartAction } from "../redux/actions/cartAction";

import store from "../redux/store";

const Product = (props) => {
 const { category, description, id, image, price, rating, title, isFavorite } =
  props.product;
 const dispatch = useDispatch();
 //console.log(isFavorite);
 const toggleFavorite = async (product) => {
  const { id } = product;
  await dispatch(toggleFavoriteProduct(product));
  store.subscribe(() => {
   const allProducts = store.getState().allProducts.products;
   //console.log(allProducts);
   /*allProducts.forEach((product) => {
    if (product.id === id) {
     product.isFavorite = !product.isFavorite;
    }
   });*/
   /*allProducts.forEach((product) => {
    if (product.id === id) {
     product.isFavorite = !product.isFavorite;
    }
   });*/
  });
 };

 const getFavoriteIcon = () => {
  if (isFavorite) {
   return (
    <i
     className="ri-heart-fill ri-fw ri-2x"
     onClick={() => toggleFavorite(props.product)}
    ></i>
   );
  } else {
   return (
    <i
     className="ri-heart-line ri-fw ri-2x"
     onClick={() => toggleFavorite(props.product)}
    ></i>
   );
  }
 };

 return (
  <div className="content">
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
    className="buy-1"
    onClick={() => dispatch(cartAction(props.product))}
   >
    Add To Cart
   </button>
  </div>
 );
};

export default Product;
