import React from "react";

// component
import Product from "../components/Product";

// custom hook
import useProductActionHook from "../hooks/productActionHook";

const ProductList = () => {
 const { products, toggleFavorite, toggleCart } = useProductActionHook();

 const productsElem = products.map((product) => (
  <Product
   key={product.id}
   product={product}
   toggleFavorite={() => toggleFavorite(product)}
   toggleCart={() => toggleCart(product)}
  />
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
