import React, { useState } from "react";

// router
import { Link } from "react-router-dom";

import store from "../redux/store";

const Header = (props) => {
 const [favoriteItemCount, setFavoriteItemCount] = useState(0);
 const [cartItemCount, setCartItemCount] = useState(0);

 store.subscribe(() => {
  console.log("store changed ", store.getState());
  setFavoriteItemCount((prevCount) => store.getState().favorites.length);
  setCartItemCount((prevCount) => store.getState().cart.length);
 });

 return (
  <div className="header">
   <div className="logo">
    <Link className="logo" to="/">
     <i className="ri-shopping-bag-2-fill ri-fw ri-2x brand-logo"></i>
     <span className="brand-name">Shop Me</span>
    </Link>
   </div>
   <div className="checkout-section">
    <div className="favorite">
     <span className="favorite-count"> {favoriteItemCount}</span>
     <Link to="/favorite">
      <i className="ri-heart-line ri-fw ri-2x"></i>
     </Link>
    </div>
    <div className="cart">
     <span className="cart-count"> {cartItemCount}</span>
     <Link to="/cart">
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
     </Link>
    </div>
   </div>
  </div>
 );
};

export default Header;
