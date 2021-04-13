import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import WatchList from "./components/WatchList";
import Favourite from "./components/Favourite";
import Home from "./components/Home";
const App = () => { 
  const [watchedList,setList]=useState([])
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home watchedList={watchedList} setWatched={setList}/></Route>
        <Route exact path="/watchlist"><WatchList watchedList={watchedList}/></Route>
        <Route exact path="/favourite" component={Favourite} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
export default App;
