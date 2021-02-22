import "./App.css";
import React, { Fragment } from "react";
import InputRestaurants from "./components/InputRestaurants";
import ListRestaurants from "./components/ListRestaurants";
import UpdateRestaurants from "./components/UpdateRestaurants";
import DetailsPage from "./components/DetailsPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-sm">
        <Router>
          <Switch>
            <Route exact path="/" component={InputRestaurants} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdateRestaurants}
            />
            <Route exact path="/restaurants/:id" component={DetailsPage} />
          </Switch>
          <ListRestaurants />
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
