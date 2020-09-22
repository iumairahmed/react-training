import React, { Component } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import axios from "axios";
import movies from "../../Data/movie.json";
import MovieCard from "../DumpComponents/MovieCard";
import "./Movies.scss";

class Movies extends Component {
  //state = { name: "" };

  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e13f23abef8864643f53bb4a255ba05a&language=en-US`)
      .then(res => {
        this.setState({ movies: res.data.results });  // setting state will rerender component
      })
  }

  render() {
    return (
      <div>
          {this.state.movies.map((element) => {
            return (
            <MovieCard key={element.id} movie={element} />
            );
          })}
      </div>
    );
  }
}
export default Movies;
