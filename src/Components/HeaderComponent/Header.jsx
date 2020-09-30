import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faFilm } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.actionbar}>
      <Container className="headerContainer" fluid>
        <Row
          className="no-margin"
          style={{ color: "white", height: "40px", paddingTop: "5px" }}
        >
          <Col md={2} style={{ paddingLeft: "30px" }}>
            TMDB Client
          </Col>
          <Col md={2}>
            <FontAwesomeIcon icon={faVideo} />
          </Col>
          <Col md={2}>
            <p>For the movie enthusiast !!</p>
          </Col>
          <Col md={2} style={{ textAlign: "center" }}>
            <FontAwesomeIcon icon={faFilm} />
          </Col>
          <Col md={4} className={styles.headerTabs}>
            <Link style={{ marginLeft: "10px", color: "white" }} to="/">
              Home
            </Link>
            <Link style={{ marginLeft: "10px", color: "white" }} to="/movies">
              Movies
            </Link>
            <Link style={{ marginLeft: "10px", color: "white" }} to="/favourite-movies">
              Favorite Movies
            </Link>
            <a style={{ marginLeft: "10px" }}>Search</a>
          </Col>
        </Row>
        <Row className="countSection no-margin">
          <Col md={12} style={{ textAlign: "center", color: "black" }}>
            Count: <Badge variant="success">0</Badge>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
