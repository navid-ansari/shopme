import React, { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

// axios
import axios from "axios";

// component
import Product from "../components/Product";

const ProductList = () => {
 const products = useSelector((state) => state.allProducts.products);
 const dispatch = useDispatch();

 const productsElem = products.map((product) => (
  <Product key={product.id} product={product} />
 ));

 useEffect(() => {
  const getProducts = async () => {
   const url = "https://fakestoreapi.com/products";
   const { data } = await axios.get(url).catch((error) => {
    console.log(error);
   });

   // dispatch data to store
   dispatch(setProducts(data));
  };
  getProducts();
 }, []);

 return (
  <div className="productlist-page">
   <div className="gallery">{productsElem}</div>
  </div>
 );
};

export default ProductList;
