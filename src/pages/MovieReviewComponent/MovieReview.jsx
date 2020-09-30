import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./movieReview.module.css";

function MovieReviews(props) {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let movieId = props.match.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=e13f23abef8864643f53bb4a255ba05a&language=en-US`
      )
      .then((res) => {
        setReview(res.data.results);
        setIsLoading(false);
      });
  }, []);

  let reviewRow = "Loading...";
  if (review.length > 0) {
    reviewRow = review.map((element) => {
      return (
        <tr key={element.id}>
          <td>{element.author}</td>
          <td className={styles.excerpt}>{element.content}</td>
          <td>Full Review</td>
        </tr>
      );
    });
  } else {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <p>No review found!</p>
        <Link to={"/movies/" + props.match.params.id}>
          Go back to details page
        </Link>
      </div>
    );
  }
  return (
    <div style={{ marginTop: "30px" }}>
      <div className={styles.reviewBtn}>
        <Link to={"/movies/" + props.match.params.id}>
          <button className={styles.btnPrimary}>Hide Reviews</button>
        </Link>
      </div>
      <div className={styles.reviewsBox}>
        <div className="">
          <table className={styles.reviewsTable}>
            <thead>
              <tr style={{ borderBottom: "1px solid black" }}>
                <th className={styles.author}>Author</th>
                <th className={styles.excerpt}>Excerpt</th>
                <th className={styles.more}>More</th>
              </tr>
            </thead>
            <tbody>{reviewRow}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MovieReviews;
