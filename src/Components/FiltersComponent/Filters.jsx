import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Filters.scss";
import logo from "../../logo.svg";

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <Container>
          <Row>
            <Col md={4}>
              List Filtering
              <input placeholder="Enter something here"/>
            </Col>
            <Col md={4}>
              Genre
              <input placeholder="Enter something here"/>
            </Col>
            <Col md={4}>
              Release Date
              <input placeholder="Enter something here"/>
            </Col>
          </Row>
          <Row style={{ paddingTop: '15px'}}>
            <Col md={4}>
              Ratings
              <select>
                <option value="0">Please select ratings</option>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
              </select>
            </Col>
            <Col md={4}>
              Sort By
              <select>
                <option value="0">Please select one</option>
                <option value="Popularity">Popularity</option>
                <option value="Reviews">Reviews</option>
                <option value="Time">Time</option>
              </select>
            </Col>
            <Col md={4}>
              Language
              <select>
                <option value="0">Please select one</option>
                <option value="English">English</option>
                <option value="Turkish">Turkish</option>
                <option value="French">French</option>
              </select>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Filters;
