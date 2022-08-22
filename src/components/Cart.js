import React from "react";

// component
import Detail from "./Detail";

const Cart = (props) => {
 const { category, description, id, image, price, rating, title } =
  props.product;
 const { rate, count } = rating || {};
 return <Detail product={props.product} />;
};

export default Cart;
