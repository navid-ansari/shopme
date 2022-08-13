import React, { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import { toggleFavoriteProduct } from "../redux/actions/favoriteProductsAction";
import { cartAction } from "../redux/actions/cartAction";

// axios
import axios from "axios";

// component
import Product from "../components/Product";

const ProductList = () => {
 const products = useSelector((state) => state.allProducts.products);
 const dispatch = useDispatch();

 const toggleFavorite = async (product) => {
  const findProduct = products.find((item) => item.id === product.id);

  await dispatch(toggleFavoriteProduct(findProduct));

  if (findProduct) {
   const modifiedProducts = products.map((product) => {
    if (product.id === findProduct.id) {
     return {
      ...product,
      isFavorite: !findProduct.isFavorite,
     };
    } else {
     return product;
    }
   });
   await dispatch(setProducts(modifiedProducts));
  }
 };

 const toggleCart = async (product) => {
  const findProduct = products.find((item) => item.id === product.id);

  await dispatch(cartAction(findProduct));

  if (findProduct) {
   const modifiedProducts = products.map((product) => {
    if (product.id === findProduct.id) {
     return {
      ...product,
      isAddedToCart: !findProduct.isAddedToCart,
     };
    } else {
     return product;
    }
   });
   await dispatch(setProducts(modifiedProducts));
  }
 };

 const productsElem = products.map((product) => (
  <Product
   key={product.id}
   product={product}
   toggleFavorite={() => toggleFavorite(product)}
   toggleCart={() => toggleCart(product)}
  />
 ));

 useEffect(() => {
  if (products.length === 0) {
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
   };
   getProducts();
  }
 }, []);

 return (
  <div className="productlist-page">
   <div className="container">
    <div className="gallery">{productsElem}</div>
   </div>
  </div>
 );
};

export default ProductList;
