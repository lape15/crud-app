import React, { Component } from "react";

// const container = {
//     "alignItems" : "center"
// }



export default class NewMovie extends Component{
   state = { 
        title: "",
        year: "",
        type: "",
        poster: ""
}
    
   

  handleFormSubmit = e => {
    e.preventDefault();
    let movieDB = JSON.parse(localStorage.getItem("movie"));
    movieDB = movieDB ? movieDB : [];
    const id = Math.floor(Math.random() * 10000);

    const { title, year, type, poster } = this.state;

    const newMovie = { id, title, year, type, poster };
    localStorage.setItem("movie", JSON.stringify([...movieDB, newMovie]));
this.setState({
      title: "",
      year: "",
      type: "",
      poster: ""
    });
    console.log(newMovie);
  };


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { title, year, type, poster } = this.state;

    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="well well-sm">
              <form class="form-horizontal" onSubmit={this.handleFormSubmit}>
                <fieldset>
                  <h4 class="text-left header"> New Movie</h4>
                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <i class="fa fa-user bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                        placeholder="Movie Title"
                        className="form-control"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <i class="fa fa-user bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        id="year"
                        name="year"
                        type="text"
                        value={year}
                        placeholder="Release Year"
                        className="form-control"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <i class="fa fa-envelope-o bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        id="type"
                        name="type"
                        type="text"
                        value={type}
                        placeholder="Movie type"
                        className="form-control"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <i class="fa fa-pencil-square-o bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        id="type"
                        name="poster"
                        type="text"
                        value={poster}
                        placeholder="Movie Poster"
                        className="form-control"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-12 text-center">
                      <button type="submit" className="btn  btn-lg">
                        Add Movie
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
             </div>
          </div>
        </div>
      </div>
    );
  }
}
