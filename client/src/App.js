import "./App.css";
import InputRestaurants from "./components/InputRestaurants";
import ListRestaurants from "./components/ListRestaurants";
import UpdateRestaurants from "./components/UpdateRestaurants";
import DetailsPage from "./components/DetailsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
