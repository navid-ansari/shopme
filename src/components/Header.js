import React, { useState } from "react";

// router
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

const Header = (props) => {
 const favorites = useSelector((state) => state.favorites);
 const cart = useSelector((state) => state.cart);

 return (
  <div className="header">
   <div className="logo">
    <Link className="logo" to="/">
     {/* <i className="ri-shopping-bag-2-fill ri-fw ri-2x brand-logo"></i> */}
     <i class="ri-shopping-bag-line ri-fw ri-2x brand-logo"></i>
     <span className="brand-name">Shop Me</span>
    </Link>
   </div>
   <div className="checkout-section">
    <div className="favorite">
     <span className="favorite-count"> {favorites.length}</span>
     <Link to="/favorite">
      <i className="ri-heart-line ri-fw ri-2x"></i>
     </Link>
    </div>
    <div className="cart">
     <span className="cart-count"> {cart.length}</span>
     <Link to="/cart">
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
     </Link>
    </div>
   </div>
  </div>
 );
};

export default Header;
