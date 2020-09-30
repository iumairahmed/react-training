import React, { useEffect, useState } from "react";
import Input from "../../shared/Input";
import Label from "../../shared/Label";
import Select from "../../shared/Select";
import styles from "./filters.module.css";

const genresList = [
  { id: 1, text: "Action" },
  { id: 2, text: "Romantic" },
  { id: 3, text: "Comedy" },
  { id: 4, text: "Horror" },
];
const sortByList = [
  { id: 1, text: "Popularity" },
  { id: 2, text: "Reviews" },
  { id: 3, text: "Time" },
];
const languageList = [
  { id: "en", text: "English" },
  { id: "tr", text: "Turkish" },
  { id: "fr", text: "French" },
  { id: "es", text: "Spanish" },
  { id: "ja", text: "Japanese" },
];
const ratingList = [
  { id: 1, text: "1" },
  { id: 2, text: "2" },
  { id: 3, text: "3" },
  { id: 4, text: "4" },
  { id: 5, text: "5" },
  { id: 6, text: "6" },
  { id: 7, text: "7" },
  { id: 8, text: "8" },
  { id: 9, text: "9" },
  { id: 10, text: "10" },
];

function Filters(props) {
  return (
    <div className={styles.filters}>
      <div className={styles.filterRow}>
        <div className={styles.filterBox} style={{ width: "auto" }}>
          <Label label={"List Filtering"} />
          <Input
            value={props.query}
            onChange={(e) => props.handleChange(e, "query")}
            placeholder={"Enter list filtering"}
          />
        </div>
        <div className={styles.filterBox} style={{ width: "auto" }}>
          <Label label={"Genre"} />
          <Select
            value={props.genre}
            onChange={(e) => props.handleChange(e, "genre")}
            data={genresList}
            placeholder={"Enter list filtering"}
          />
        </div>
      </div>
      <div className={styles.filterRow}>
        <div className={styles.filterBox} style={{ width: "auto" }}>
          <Label label={"Release Date"} />
          <Input
            value={props.year}
            onChange={(e) => props.handleChange(e, "year")}
            placeholder={"Enter something here"}
          />
        </div>
        <div className={styles.filterBox} style={{ width: "auto" }}>
          <Label label={"Ratings"} />
          <Select
            value={props.rating}
            onChange={(e) => props.handleChange(e, "rating")}
            data={ratingList}
            placeholder={"Select any rating"}
          />
        </div>
        <div className={styles.filterBox} style={{ width: "auto" }}>
          <Label label={"Sort By"} />
          <Select
            value={props.sortBy}
            onChange={(e) => props.handleChange(e, "sortBy")}
            data={sortByList}
            placeholder={"Select any filter"}
          />
        </div>
        <div className={styles.filterBox} style={{ width: "auto" }}>
          <Label label={"Language"} />
          <Select
            value={props.language}
            onChange={(e) => props.handleChange(e, "language")}
            data={languageList}
            placeholder={"Select any language"}
          />
        </div>
      </div>
    </div>
  );
}
export default Filters;
