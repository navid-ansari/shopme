import React, { useState, useEffect } from "react";

// router
import { useParams } from "react-router-dom";

// axios
import axios from "axios";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
 selectedProduct,
 clearSelectedProduct,
} from "../redux/actions/productAction";

// component
import Stars from "../components/Stars";

const ProductDetail = () => {
 const { productId } = useParams();
 const product = useSelector((state) => state.product);
 const dispatch = useDispatch();

 const { category, description, id, image, price, title, rating } = product;
 const { rate, count } = rating || {};

 useEffect(() => {
  const getProductDetail = async () => {
   const url = `https://fakestoreapi.com/products/${productId}`;
   const { data: productDetail } = await axios.get(url).catch((error) => {
    console.log(error);
   });
   dispatch(selectedProduct(productDetail));
  };
  if (productId && productId !== "") {
   getProductDetail();
  }

  // clear product when component destroys
  return () => {
   dispatch(clearSelectedProduct());
  };
 }, [productId]);

 return (
  <div className="productdetail-page">
   <div className="container">
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
   </div>
  </div>
  /*<div className="productdetail-page">
   <div className="container">
    <div className="single-product-detail">
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
   </div>
  </div>*/
 );
};

export default ProductDetail;
