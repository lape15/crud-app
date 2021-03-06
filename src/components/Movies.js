import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
  let moviesContent;

  console.log(movies);

  if (movies) {
     moviesContent = movies.map(movie => (
      <div key={movie.id}>
        <Movie movie={movie} />
      </div>
    ))
  } else {
     moviesContent = <div>No New Movies</div>;
  }

  return <div>{moviesContent}</div>;
};

export default Movies;
