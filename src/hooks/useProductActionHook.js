import { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import { toggleFavoriteProduct } from "../redux/actions/favoriteProductsAction";
import { cartAction } from "../redux/actions/cartAction";

// axios
import axios from "axios";

import { NotFoundError } from "../utils/error-handler";

import { get } from "../utils/rest-client";

const useProductActionHook = () => {
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

 const getProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  try {
   const { data } = await get({ url });
   const modifiedProducts = data.map((product) => {
    return {
     ...product,
     isAddedToCart: false,
     isFavorite: false,
    };
   });

   // dispatch data to store
   dispatch(setProducts(modifiedProducts));
  } catch (error) {
   console.log("inside catch");
   throw new NotFoundError("failed to fetch product from api");
  }
 };

 useEffect(() => {
  console.log("Product length :" + products.length);
  (async () => {
   if (products.length === 0) {
    //console.log("inside if");
    const response = await getProducts();
    //console.log(response);
   } else {
    console.log("inside else");
   }
  })();
 }, []);

 return {
  products,
  dispatch,
  toggleFavorite,
  toggleCart,
 };
};

export default useProductActionHook;
