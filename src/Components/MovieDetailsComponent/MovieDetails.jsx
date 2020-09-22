import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.scss";

class MoviesDetails extends Component {
  state = { movie: {} };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let movieId = this.props.match.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=e13f23abef8864643f53bb4a255ba05a&language=en-US`
      )
      .then((res) => {
        this.setState({ movie: res.data }); // setting state will rerender component
      });
  }

  render() {
    let movieDetailsBox;
    let genreList = "";
    if (this.state.movie != null) {
      if (this.state.movie.genres != null) {
        debugger;
        genreList = this.state.movie.genres.map((element) => {
          return this.state.movie.genres.length > 1
            ? element.name + ","
            : element.name;
        });
      }
      movieDetailsBox = (
        <div>
          <div className="detailsBox">
            <div>
              <img
                className="img-box"
                src={
                  "https://image.tmdb.org/t/p/original" +
                  this.state.movie.poster_path
                }
              />
            </div>
            <div className="description-box">
              <h2>{this.state.movie.original_title}</h2>
              <h4>Overview: </h4>
              <p>{this.state.movie.overview}</p>
              <div className="detailsRow">
                <p className="greylabel">Runtime: </p>
                <p className="whitelabel">{this.state.movie.runtime}</p>
                <p className="greylabel">Release Date: </p>
                <p className="whitelabel">{this.state.movie.release_date}</p>
              </div>
              <br />
              <div className="detailsRow">
                <p className="greylabel">Genres: </p>
                <p className="whitelabel">{genreList}</p>
              </div>
              <div className="detailsRow">
                <p className="greylabel">Spoken Language: </p>
                <p className="whitelabel">{this.state.movie.release_date}</p>
              </div>
            </div>
          </div>
          <div className="review-btn">
            <Link to={`/reviews/` + this.state.movie.id}>
              <button className="btnPrimary">Show Reviews</button>
            </Link>
          </div>
        </div>
      );
    } else {
      movieDetailsBox = <div></div>;
    }
    return movieDetailsBox;
  }
}

export default MoviesDetails;
