import React, { useState, useEffect } from "react";

// router
import { useParams, useLocation } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
 selectedProduct,
 clearSelectedProduct,
} from "../redux/actions/productAction";

// component
import Detail from "../components/Detail";

import { get } from "../utils/rest-client";

const ProductDetail = () => {
 const { productId } = useParams();
 const product = useSelector((state) => state.product);
 const dispatch = useDispatch();

 useEffect(() => {
  const getProductDetail = async () => {
   const url = `https://fakestoreapi.com/products/${productId}`;
   try {
    const { data } = await get({ url });
    dispatch(selectedProduct(data));
    return data;
   } catch (error) {
    throw new Error("failed to fetch product detail");
   }
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
  <div className="detail-page" data-testid="detail-page">
   <div className="container">
    <Detail product={product} />
   </div>
  </div>
 );
};

export default ProductDetail;
