import React from "react";
import "../Card/index.css";
const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="card-container">
      <div>
        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}/>
      </div>
      <div className="details">
        <h6>{item.title}</h6>
        <small>{item.release_date}</small> 
        <button className="mt-2">Add to Watchlist</button> 
        <button className="mt-2">Add to Favourites</button>
      </div>
    </div>
  );
};

export default Card;
