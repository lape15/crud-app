import React, { Component } from "react";
import {NavLink} from 'react-router-dom'

class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card" > <NavLink class="far fa-edit" to="/edit"></NavLink>
         <h4>{movie.title}</h4>
            <img
           //   width="150"
           class="card-img-top"
           alt={movie.title}
           src={movie.poster}
        />
         <p>{movie.year}</p>
      </div>
    );
  }
}

export default Movie;
