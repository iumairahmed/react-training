import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetails.scss";
import movies from "../../Data/movie.json";

class MoviesDetails extends Component {
  state = { movies: [] };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ movies: movies.Movies });
  }

  render() {
    const movie = this.state.movies.find(
      (p) => p.Id == this.props.match.params.id
    );
    let movieDetailsBox;
    if (movie != null) {
      movieDetailsBox = 
      <div>
        <div className="detailsBox">
          <div>
            <img className="img-box" src={movie.Poster} />
          </div>
          <div className="description-box">
            <h2>Name: </h2>{movie.Title}
            <h4>Overview: </h4><p>{movie.Description}</p>
            <h4>Runtime: </h4>{movie.Runtime}
            <h4>Release Date: </h4>{movie.Released}
            <h4>Genre: </h4>{movie.Genre}
            <h4>Spoken Language: </h4>{movie.Language}
            <h4>Country: </h4>{movie.Country}
          </div>
        </div>
        <div className="review-btn">
          <Link to={`/reviews/`+movie.Id}>
            <button className="btnPrimary">Show Reviews</button>
          </Link>
        </div>
      </div>;
    }else{
        movieDetailsBox = <div></div>
    }
    return movieDetailsBox;
  }
}

export default MoviesDetails;
