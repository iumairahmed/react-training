import React, { Component } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import movies from "../../Data/movie.json";
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
    this.setState({ movies: movies.Movies });
  }

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <Row className="no-margin">
          {this.state.movies.map((element) => {
            return (
              <Col md={3} key={element.Id}>
                <Card>
                  <Link to={"/movies/" + element.Id}>
                    <Card.Img
                      className="imgBox"
                      variant="top"
                      src={element.Poster}
                    />
                  </Link>
                  <Card.Body>
                    <Link to={"/movies?Id=" + element.Id}>
                      <Card.Title>{element.Title}</Card.Title>
                    </Link>
                    <Card.Text>{element.Description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Movies;
