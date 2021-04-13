import React from 'react';
import "../WatchList/index.css"
import Watchcard from "../Watchcard/";
const index = ({watchedList}) => {
    return (
        <div className="watchList-container">
            {/* <h1>WatchList</h1> */}
            {watchedList.map((item,id)=>{
                return <Watchcard item={item}/>
            })}
        </div>
    )
}

export default index
