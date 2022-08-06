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
import Star from "../components/Star";

const ProductDetail = () => {
 const [starCount, setStarCount] = useState([]);

 const { productId } = useParams();
 const product = useSelector((state) => state.product);
 const dispatch = useDispatch();

 const { category, description, id, image, price, title, rating } = product;
 const { rate, count } = rating || {};
 //console.log(rate);

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

 useEffect(() => {
  /*const stars = Math.ceil(rate);
  const starArray = (count) => {
   const array = [];
   for (let i = 0; i < count; i++) {
    array.push(i);
   }
   console.log(array);
   return array;
  };
  const totalStars = starArray(stars);
  console.log(totalStars);*/
  //setStarCount((prevCount) => [...prevCount, ...totalStars]);

  // second option
  const stars = Math.ceil(rate);
  const starArray = (count) => {
   const array = [];
   for (let i = 0; i < count; i++) {
    array.push(i);
   }
   //console.log(array);
   return array;
  };
  (async () => {
   const totalStars = await starArray(stars);
   setStarCount((prevCount) => [...prevCount, ...totalStars]);
   //console.log(totalStars);
  })();
 }, [rate]);
 //console.log(starCount);
 const starElem = starCount.map((star) => <Star key={star} />);

 return (
  <div className="gallery">
   <div className="productdetail-page">
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
      <span className="rating-stars">{/* <Stars rating={rate} /> */}</span>
      <span className="rating-stars">{starElem}</span>
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
 );
};

export default ProductDetail;
