import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Filters.scss";
import logo from "../../logo.svg";
import Input from "../DumpComponents/Input";
import Label from "../DumpComponents/Label";
import Select from "../DumpComponents/Select";

class Filters extends Component {
  render() {
    let genresList = [
      { id: 1, text: "Action" },
      { id: 2, text: "Romantic" },
      { id: 3, text: "Comedy" },
      { id: 4, text: "Horror" },
    ];
    let sortBy = [
      { id: 1, text: "Popularity" },
      { id: 2, text: "Reviews" },
      { id: 3, text: "Time" }
    ];
    let language = [
      { id: 1, text: "English" },
      { id: 2, text: "Turkish" },
      { id: 3, text: "French" }
    ];
    let ratings = [
      { id: 1, text: "1" },
      { id: 2, text: "2" },
      { id: 3, text: "3" },
      { id: 4, text: "4" },
      { id: 5, text: "5" },
      { id: 6, text: "6" },
      { id: 7, text: "7" },
      { id: 8, text: "8" },
      { id: 9, text: "9" },
      { id: 10, text: "10" }
    ];
    return (
      <div className="filters">
          <div className="filterRow">
            <div className="filterBox" style={{ width: "25%" }}>
              <Label label={"List Filtering"} />
              <Input placeholder={"Enter list filtering"} />
            </div>
            <div className="filterBox" style={{ width: "25%" }}>
              <Label label={"Genre"} />
              <Select data={genresList} placeholder={"Enter list filtering"} />
            </div>
          </div>
          <div className="filterRow">
            <div className="filterBox" style={{ width: "auto" }}>
              <Label label={"Release Date"} />
              <Input placeholder={"Enter something here"} />
            </div>
            <div className="filterBox" style={{ width: "auto" }}>
              <Label label={"Ratings"} />
              <Select data={ratings} placeholder={"Select any rating"} />
            </div>
            <div className="filterBox" style={{ width: "auto" }}>
              <Label label={"Sort By"} />
              <Select data={sortBy} placeholder={"Select any filter"} />
            </div>
            <div className="filterBox" style={{ width: "auto" }}>
              <Label label={"Language"} />
              <Select data={language} placeholder={"Select any language"} />
            </div>
          </div>
      </div>
    );
  }
}
export default Filters;
