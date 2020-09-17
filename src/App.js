import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import * as bs from "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./Components/HeaderComponent/Header";
import Movies from "./Components/MoviesComponent/Movies";
import MoviesDetails from "./Components/MovieDetailsComponent/MovieDetails";
import MovieReviews from "./Components/MovieReviewComponent/MovieReview";
import Filters from "./Components/FiltersComponent/Filters";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Filters />
        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route path="/movies/:id" component={MoviesDetails}></Route>
          <Route path="/reviews/:id" component={MovieReviews}></Route>
          <Route path="/"></Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
