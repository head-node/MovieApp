import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import WatchList from "./components/WatchList";
import Favourite from "./components/Favourite";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watchlist" component={WatchList} />
        <Route exact path="/favourite" component={Favourite} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
export default App;
