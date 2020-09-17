import React, { Component } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="action-bar">
        <Container className="headerContainer" fluid>
          <Row className="no-margin" style={{color: 'white', height: '40px', paddingTop: '5px'}}>
            <Col md={4} style={{ paddingLeft: '30px'}}>Movies App</Col>
            <Col md={4}></Col>
            <Col md={4} className="headerTabs">
                <Link style={{marginLeft: '10px', color: 'white'}} to="/">Home</Link>
                <Link style={{marginLeft: '10px', color: 'white'}} to="/movies">Movies</Link>
                <Link style={{marginLeft: '10px', color: 'white'}} to="/">Upcoming Movies</Link>
                <a style={{marginLeft: '10px'}}>Search</a></Col>
          </Row>
          <Row className="countSection no-margin">
            <Col md={12} style={{ textAlign: 'center', color: 'black'}}>Count: <Badge variant="success">0</Badge></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Header;
