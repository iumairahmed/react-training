import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import calenderLogo from "../../Assets/calendar-week-solid.svg";
import ratingLogo from "../../Assets/star-solid.svg";

class MovieCard extends Component {
  render() {
    return (
      <div>
        <div key={this.props.movie.id}>
          <div className="card">
            <Link to={"/movies/" + this.props.movie.id}>
              <img
                className="imgBox"
                variant="top"
                src={"https://image.tmdb.org/t/p/original"+this.props.movie.poster_path}
              />
            </Link>
            <div className="card-body">
              <Link to={"/movies/" + this.props.movie.id}>
                <h5>{this.props.movie.original_title}</h5>
              </Link>
              <img className="logo center" src={calenderLogo} alt="Calender Logo" />
              <p>{this.props.movie.release_date}</p>
              <img className="logo center" src={ratingLogo} alt="Rating Logo" />
              <p>{this.props.movie.vote_average}</p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
