import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./movieCard.module.css";

function MovieCard(props) {
  const context = useContext(AppContext);
  return (
    <div>
      <div key={props.movie.id}>
        <div className={styles.card}>
          <Link to={"/movies/" + props.movie.id}>
            <img
              className={styles.imgBox}
              variant="top"
              alt="movie img"
              src={
                "https://image.tmdb.org/t/p/original" + props.movie.poster_path
              }
            />
          </Link>
          <div className={styles.cardBody}>
            <Link to={"/movies/" + props.movie.id}>
              <h5 className={styles.truncate}>{props.movie.original_title}</h5>
            </Link>
            <FontAwesomeIcon className={styles.logo} icon={faCalendar} />
            {/* <img className="logo center" src={calenderLogo} alt="Calender Logo" /> */}
            <p>{props.movie.release_date}</p>
            {/* <img className="logo center" src={ratingLogo} alt="Rating Logo" /> */}
            <FontAwesomeIcon className={styles.logo} icon={faStar} />
            <p>{props.movie.vote_average}</p>
            <hr />
            <button onClick={() => context.setFavouriteMovies(props.movie)} className={styles.favBtn}>Add to favorites</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
