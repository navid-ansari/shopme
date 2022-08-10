import React, { useState, useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

// axios
import axios from "axios";

// component
import Product from "../components/Product";

import store from "../redux/store";

const ProductList = () => {
 const [allProducts, setAllProducts] = useState([]);
 const products = useSelector((state) => state.allProducts.products);
 const dispatch = useDispatch();

 useEffect(() => {
  if (products.length === 0) {
   console.log("fetch products from api");
   const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    const { data } = await axios.get(url).catch((error) => {
     console.log(error);
    });

    // add 'isFavorite' & 'isAddedToCart' property
    const modifiedProducts = data.map((product) => {
     return {
      ...product,
      isAddedToCart: false,
      isFavorite: false,
     };
    });

    // dispatch data to store
    dispatch(setProducts(modifiedProducts));
    setAllProducts((prevProducts) => modifiedProducts);
   };
   getProducts();
  } else {
   console.log("fetch products from store");
   setAllProducts((prevProducts) => products);
  }
 }, []);

 store.subscribe(() => {
  console.log("store subscription");
  const updatedProducts = store.getState().allProducts.products;
  setAllProducts((prevProducts) => {
   console.log(updatedProducts);
   return [...updatedProducts];
  });
 });

 const productsElem = allProducts.map((product) => (
  <Product key={product.id} product={product} />
 ));

 return (
  <div className="productlist-page">
   <div className="container">
    <div className="gallery">{productsElem}</div>
   </div>
  </div>
 );
};

export default ProductList;
