import React from "react";
import "./MovieRow.css";
// import { APIKEY, baseURL } from "../Films";


const APIKEY = "2cf3e324d5ce322f9dae29cec22c02d6";
let baseURL = "https://api.themoviedb.org/3/";
let url = "".concat(baseURL, "configuration?api_key=", APIKEY);

var myFavoriteMovies = [];

function IsFav(props) {
  return <button onClick={props.onClick} className="heart" />;
}

function IsNotFav(props) {
  return <button onClick={props.onClick} className="toggled heart" />;
}

class MovieRow extends React.Component {
  constructor(props) {
    super(props);
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.state = { isFaved: false };
  }

  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  addFavorite() {
    this.setState({ isFaved: true });
    const favMovie = "".concat(
      baseURL,
      "movie/",
      this.props.movie.id,
      "?api_key=",
      APIKEY
    );
    myFavoriteMovies.push(favMovie);
  }

  deleteFavorite() {
    this.setState({ isFaved: false });
  }

  render() {
    const isFaved = this.state.isFaved;
    let favBtn;
    if (isFaved) {
      favBtn = <IsNotFav onClick={this.deleteFavorite} />;
    } else {
      favBtn = <IsFav onClick={this.addFavorite} />;
    }
    return (
      <div
        key={this.props.movie.id}
        className="MovieRow"
        favornot={this.state.isFaved.value}
      >
        <div>
          <img alt="poster" src={this.props.posterSrc} />
        </div>
        <div>
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <input
            type="button"
            onClick={this.viewMovie.bind(this)}
            value="View"
          />

          {favBtn}
        </div>
      </div>
    );
  }
}
export { MovieRow as default, myFavoriteMovies };
