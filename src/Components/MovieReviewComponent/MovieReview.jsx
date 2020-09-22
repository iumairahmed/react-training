import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MovieReview.scss";

class MovieReviews extends Component {
  state = { review: {} };

  componentDidMount() {
    let movieId = this.props.match.params.id;
    debugger;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=e13f23abef8864643f53bb4a255ba05a&language=en-US`
      )
      .then((res) => {
        this.setState({ review: res.data.results }); // setting state will rerender component
      });
  }
  render() {
    let reviewRow = "";
    if (this.state.review.length > 0) {
      reviewRow = this.state.review.map((element) => {
        return (
          <tr>
            <td>{element.author}</td>
            <td className="excerpt">
              {element.content}
            </td>
            <td>Full Review</td>
          </tr>
        );
      });
    }
    return (
      <div>
        <div className="review-btn">
          <Link to={"/movies/" + this.props.match.params.id}>
            <button className="btnPrimary">Hide Reviews</button>
          </Link>
        </div>
        <div className="reviewsBox">
          <div className="">
            <table className="reviewsTable">
              <thead>
                <tr style={{ borderBottom: "1px solid black" }}>
                  <th className="author">Author</th>
                  <th className="excerpt">Excerpt</th>
                  <th className="more">More</th>
                </tr>
              </thead>
              <tbody>
                  {reviewRow}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieReviews;
