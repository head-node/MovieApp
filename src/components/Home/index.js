import React from "react";
import "../Home/index.css";
const index = () => {
  return (
    <div>
      <div className="img-container">
        <img src="http://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB-S5-Key-Art-2560-v2.jpg" />
      </div>
      <div className="search-container m-5">
        <div>
          <input type="search" className="search mr-3"/>
          <button className="btn btn-success">Search</button>
        </div>
      </div>
    </div>
  );
};

export default index;
