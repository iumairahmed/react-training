import React, { Fragment, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AppContext from "./appContext";
import * as bs from "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/HeaderComponent/Header";
import Movies from "./pages/MoviesComponent/Movies";
import MoviesDetails from "./pages/MovieDetailsComponent/MovieDetails";
import MovieReviews from "./pages/MovieReviewComponent/MovieReview";

function App() {
  const [favourtieMovies, setFavouriteMovies] = useState([]);

  const setFavouriteMoviesLocal = React.useCallback((movie) => {
    setFavouriteMovies([...favourtieMovies, movie]);
    // if (favourtieMovies.some( e => e.id == movie.id)) {
    //   favourtieMovies = favourtieMovies.filter((item) => item !== movie);
    //   setFavouriteMovies([...favourtieMovies]);
    // } else {
    //   setFavouriteMovies([...favourtieMovies, movie]);
    // }
  }, []);

  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/movies/:id" component={MoviesDetails}></Route>
          <Route exact path="/reviews/:id" component={MovieReviews}></Route>
          <AppContext.Provider
            value={{
              setFavouriteMovies: setFavouriteMoviesLocal,
              movies: favourtieMovies,
            }}
          >
            <Route exact path="/" component={Movies}></Route>
            <Route
              exact
              path="/movies"
              render={(props) => <Movies {...props} isFavourite={false} />}
            ></Route>
            <Route
              exact
              path="/favourite-movies"
              render={(props) => <Movies {...props} isFavourite={true} />}
            ></Route>
          </AppContext.Provider>
          <Route path="/"></Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
