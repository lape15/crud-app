import React, {Component} from 'react'
 import {NavLink} from 'react-router-dom';

export default class Home extends Component {
                 state = {
                            movies: [],
                            // searchField: ''
                            };

            componentDidMount(){
               this.setState({
                   movies : JSON.parse(localStorage.getItem("movie"))
               })
            }

             render(){
                 const {movies} = this.state;
                 
        let showMovies;
         
showMovies =  movies.map(movie => (
      <div className="card" key={movie.id}>
        <h4>{movie.title}</h4>
        <img
        //   width="150"
          class="card-img-top"
          alt={movie.title}
          src={movie.poster}
        />
        <p>{movie.year}</p>
        </div>
      
    ));
    return (
         <div className="containers">
                {showMovies}{" "}
                </div>
            )
    }
}