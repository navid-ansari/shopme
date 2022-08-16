import React, { useState } from "react";

// router
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

const Header = (props) => {
 const favorites = useSelector((state) => state.favorites);
 const cart = useSelector((state) => state.cart);

 const getFavoriteIcon = () => {
  if (favorites.length > 0) {
   return <i className="ri-heart-fill ri-2x"></i>;
  } else {
   return <i className="ri-heart-line ri-2x"></i>;
  }
 };

 const getCartIcon = () => {
  if (cart.length > 0) {
   return <i className="ri-shopping-cart-fill ri-2x"></i>;
  } else {
   return <i className="ri-shopping-cart-line ri-2x"></i>;
  }
 };

 return (
  <div className="header" id="header">
   <div className="logo">
    <Link className="logo" to="/">
     <i className="ri-shopping-bag-line ri-fw ri-2x brand-logo"></i>
     <span className="brand-name">Shop Me</span>
    </Link>
   </div>
   <div className="checkout-section">
    <div className="favorite">
     <span className="favorite-count"> {favorites.length}</span>
     <Link to="/favorite">{getFavoriteIcon()}</Link>
    </div>
    <div className="cart">
     <span className="cart-count"> {cart.length}</span>
     <Link to="/cart">{getCartIcon()}</Link>
    </div>
   </div>
  </div>
 );
};

export default Header;
