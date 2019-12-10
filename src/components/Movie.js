import React, { Component } from "react";

class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h5>{movie.title}</h5>
        <h5>{movie.year}</h5>
        <h5>{movie.type}</h5>
        <h5>{movie.poster}</h5>
      </div>
    );
  }
}

export default Movie;
