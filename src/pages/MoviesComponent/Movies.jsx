import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "../../appContext";
import MovieCard from "../../shared/MovieCard";
import styles from "./movies.module.css";
import Filters from "../../components/FiltersComponent/Filters";

function Movies(props) {
  const context = useContext(AppContext);
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [language, setLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e, filterType) => {
    switch (filterType) {
      case "query":
        setQuery(e.target.value);
        break;
      case "year":
        setYear(e.target.value);
        break;
      case "genre":
        setGenre(e.target.value);
        break;
      case "rating":
        setRating(e.target.value);
        break;
      case "sortBy":
        setSortBy(e.target.value);
        break;
      case "language":
        setLanguage(e.target.value);
        break;
      default:
        break;
    }
  };

  // useEffect(() => {
  //   generateQueryParameters();
  //   if (query == null || query === "") {
  //     return;
  //   }
  //   let params = "?query=" + query;
  //   // axios
  //   //   .get(
  //   //     `https://api.themoviedb.org/3/search/movie?api_key=e13f23abef8864643f53bb4a255ba05a&language=en-US${params}`
  //   //   )
  //   //   .then((res) => {
  //   //     setIsLoading(false);
  //   //   });
  // }, [query, year, genre, rating, sortBy, language]);

  function objToQueryString(obj) {
    debugger;
    const keyValuePairs = [];
    for (const key in obj) {
      if (obj[key] != "") {
        keyValuePairs.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
        );
      }
    }
    return keyValuePairs.join("&");
  }

  const generateQueryParameters = () => {
    let params = objToQueryString({
      query: query,
      year: year,
      genre: genre,
      rating: rating,
      sortBy: sortBy,
      language: language,
    });
    console.log(params);
    return params;
  };

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e13f23abef8864643f53bb4a255ba05a`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  };
  useEffect(() => {
    let params = generateQueryParameters();
    debugger;
    if (params != "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=e13f23abef8864643f53bb4a255ba05a&${params}`
        )
        .then((res) => {
          debugger;
          setMovies(res.data.results);
        });
    } else {
      getMovies();
    }
  }, [query, year, genre, rating, sortBy, language]);

  useEffect(() => {
    if (!props.isFavourite) {
      getMovies();
    } else {
      if (context.movies) {
        setMovies(context.movies);
      }
    }
  }, []);

  return (
    <Fragment>
      <Filters handleChange={handleChange} />
      <div className={styles.moviesBox}>
        {movies.map((element) => {
          return <MovieCard key={element.id} movie={element} />;
        })}
      </div>
    </Fragment>
  );
}

export default Movies;
