import React from "react";

// redux
import { useDispatch } from "react-redux";

// router
import { Link } from "react-router-dom";

import { toggleFavoriteProduct } from "../redux/actions/favoriteProductsAction";

import { cartAction } from "../redux/actions/cartAction";

const Product = (props) => {
 const { category, description, id, image, price, rating, title } =
  props.product;
 const dispatch = useDispatch();

 return (
  <div className="content">
   <div
    className="favorite-icon"
    onClick={() => dispatch(toggleFavoriteProduct(props.product))}
   >
    <i className="ri-heart-line ri-fw ri-2x"></i>
   </div>
   <Link to={`/product/${id}`}>
    <img src={image} style={{ height: "200px" }} alt="" />
    <h3>{title}</h3>
    <p>{description}</p>
    <h6>
     <span>&#x20b9;</span>
     {price}
    </h6>
    {/* <ul>
     <li>
      <i class="fa fa-star" aria-hidden="true"></i>
     </li>
     <li>
      <i class="fa fa-star" aria-hidden="true"></i>
     </li>
     <li>
      <i class="fa fa-star" aria-hidden="true"></i>
     </li>
     <li>
      <i class="fa fa-star" aria-hidden="true"></i>
     </li>
     <li>
      <i class="fa fa-star" aria-hidden="true"></i>
     </li>
    </ul> */}
   </Link>
   <button
    className="buy-1"
    onClick={() => dispatch(cartAction(props.product))}
   >
    Add To Cart
   </button>
  </div>
 );
};

export default Product;
