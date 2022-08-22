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

// component
import Detail from "../components/Detail";

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
  <div className="detail-page">
   <Detail product={product} />
  </div>
 );
};

export default ProductDetail;
