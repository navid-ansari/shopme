import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import Favorite from "../components/Favorite";

const FavoritesList = () => {
 const favorites = useSelector((state) => state.favorites);
 const favroriteElem = favorites.map((favorite) => (
  <Favorite key={favorite.id} favorite={favorite} />
 ));
 return (
  <div className="favorites-page" data-testid="favorites-page">
   <div className="container">{favroriteElem}</div>
  </div>
 );
};

export default FavoritesList;
