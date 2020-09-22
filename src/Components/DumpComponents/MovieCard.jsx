import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

class MovieCard extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
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
                <h4>{this.props.movie.original_title}</h4>
              </Link>
              <i className="fa fa-calendar"></i>
              <p>{this.props.movie.release_date}</p>
              <i className="fa fa-calendar"></i>
              <p>{this.props.movie.vote_average}</p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
