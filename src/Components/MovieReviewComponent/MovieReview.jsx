import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieReview.scss";

class MovieReviews extends Component {
  render() {
    return (
      <div>
        <div className="review-btn">
          <Link to={"/movies/"+this.props.match.params.id}>
            <button className="btnPrimary">Hide Reviews</button>
          </Link>
        </div>
        <div className="reviewsBox">
          <div className="">
            <table className="reviewsTable">
                <thead>
                    <tr style={{ borderBottom: '1px solid black'}}>
                        <th className="author">Author</th>
                        <th className="excerpt">Excerpt</th>
                        <th className="more">More</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Umair Ahmed</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Hira Zaidi</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Hamza Khan</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Fahad Ali</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Sharmeen</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Umar Farooq</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Usman Khan</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Shoaib Khan</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>M. Salman</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Abdulah Rashid</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Zahid Bashir</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Afraz Ahmed</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                    <tr>
                        <td>Amir Ali</td>
                        <td className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus vel nulla commodo, vitae ullamcorper ligula tristique. Aenean nulla purus, cursus vulputate ligula at, pharetra dignissim mauris. Morbi eu venenatis lorem. Vestibulum luctus tortor eget aliquet mattis.</td>
                        <td>Full Review</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieReviews;
