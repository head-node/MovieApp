import React, { useState } from "react";
import "../Home/index.css";
const Index = () => {
  const [searchValue, setSearch] = useState("");
  const [fetchedItems, setItems] = useState([]);
  const search = (e) => {
    setItems([]);
    setSearch(e.target.value);
  };
  React.useEffect(() => {
    if (searchValue.length > 0) {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=a363a4696d029c44fa43d89d517e055b&language=en-US&query=" +
          searchValue
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log(result)
          setItems(result.results);
        })
        .catch((error) => console.log("error", error));
    }

    //   return () => {
    //       cleanup
    //   }
  }, [searchValue]);
  console.log(fetchedItems);
  return (
    <div>
      <div className="img-container">
        <img src="http://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB-S5-Key-Art-2560-v2.jpg" />
      </div>
      <div className="search-container m-5">
        <div>
          <input type="search" className="search mr-3" onChange={search} />
          <button className="btn btn-success">Search</button>
        </div>
      </div>
      <div>
        <ol>
          {fetchedItems !== undefined
            ? fetchedItems.map((item, index) => {
                if (index < 5) return <p>{item.original_title}</p>;
              })
            : null}
        </ol>
      </div>
    </div>
  );
};

export default Index;
