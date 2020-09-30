import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import styles from "./movieDetails.module.css";

function MoviesDetails(props) {
  const [movie, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let movieId = props.match.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=e13f23abef8864643f53bb4a255ba05a&language=en-US`
      )
      .then((res) => {
        debugger;
        setDetails(res.data);
        setIsLoading(false);
      });
  }, []);

  let genreList = "";
  if (movie != null) {
    if (movie.genres != null) {
      genreList = movie.genres.map((element) => {
        return movie.genres.length > 1 ? element.name + "," : element.name;
      });
    }
  }
  return isLoading ? (
    "Loading..."
  ) : (
    <div style={{ marginTop: '30px'}}>
      <div className={styles.detailsBox}>
        <div className={styles.imgBox}>
          <img
            className={styles.imgSize}
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          />
        </div>

        <div className={styles.descriptionBox}>
          <div>
            <h2 className={styles.title}>{movie.original_title}</h2>
            <Link className={styles.icon} to="/movies">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
          </div>
          <div className={styles.detailsBox}>
            <h4>Overview: </h4>
            <p>{movie.overview}</p>
            <div className={styles.detailsRow}>
              <p className={styles.greylabel}>Runtime: </p>
              <p className={styles.whitelabel}>{movie.runtime}</p>
              <p className={styles.greylabel}>Release Date: </p>
              <p className={styles.whitelabel}>{movie.release_date}</p>
            </div>
            <br />
            <div className={styles.detailsRow}>
              <p className={styles.greylabel}>Genres: </p>
              <p className={styles.whitelabel}>{genreList}</p>
            </div>
            <div className={styles.detailsRow}>
              <p className={styles.greylabel}>Spoken Language: </p>
              <p className={styles.whitelabel}>{movie.original_language}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviewBtn}>
        <Link to={`/reviews/` + movie.id}>
          <button className={styles.btnPrimary}>Show Reviews</button>
        </Link>
      </div>
    </div>
  );
}

export default MoviesDetails;
