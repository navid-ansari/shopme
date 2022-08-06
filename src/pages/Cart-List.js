import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import Cart from "../components/Cart";

const CartList = () => {
 const cart = useSelector((state) => state.cart);

 const cartElem = cart.map((product) => (
  <Cart key={product.id} product={product} />
 ));

 return (
  <div className="cart-page">
   <div className="gallery">{cartElem}</div>
  </div>
 );
};

export default CartList;
