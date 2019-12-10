import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Movies from "./Movies";

export default class Home extends Component {
  state = {
    movies: JSON.parse(localStorage.getItem("movie"))
    // searchField: ''
  };

  // componentDidMount() {
  //   this.setState({
  //     movies: JSON.parse(localStorage.getItem("movie"))
  //   });

  //   console.log(this.state.movies);
  // }

  render() {
    const { movies } = this.state;
    console.log(movies);

    // let showMovies;

    // showMovies = movies.map(movie => (
    //   <div className="card" key={movie.id}>
    //     <h4>{movie.title}</h4>
    //     <img
    //       //   width="150"
    //       class="card-img-top"
    //       alt={movie.title}
    //       src={movie.poster}
    //     />
    //     <p>{movie.year}</p>
    //   </div>
    // ));
    return (
      <div className="containers">
        {/* <h1 className="text-center">Top Trending Movies</h1> */}

        <Movies movies={movies} />
      </div>
    );
  }
}
