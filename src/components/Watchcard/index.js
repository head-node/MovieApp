import React from "react";
import "../Watchcard/index.css";

const Card = ({item}) => {
  return (
    <div className="card-container">
      <div>
        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}/>
      </div>
      <div className="details">
        <h6>{item.title}</h6>
        <small>{item.release_date}</small>
      </div>
    </div>
  );
};

export default Card;
