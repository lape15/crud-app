import React, {Component} from 'react';

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
    
    handleFormSubmit = (e) => {
        e.preventDefault();
       let movieDB = JSON.parse(localStorage.getItem("movie"))
        movieDB = movieDB ? movieDB : []
        const id = Math.floor(Math.random() * 10000)
        const { title, year, type, poster } = this.state
        const newMovie = { id, title, year,type, poster }
        localStorage.setItem("movie", JSON.stringify([...movieDB, newMovie]))
        this.setState({
                    
                    title:'',
                    year: '',
                    type: '',
                    poster: ''
})
        console.log(newMovie) 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
        <div className="container" >
            <div className="row">
                <div className="col-md-12">
                     <div className="well well-sm">
                     <form className="form-horizontal"  onSubmit={this.handleFormSubmit}>
                    <fieldset>
                        <h4 className="text-left header"> New Movie</h4>
                            <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="title" name="title" type="text" placeholder="Movie Title" className="form-control" required onChange={this.handleChange}  />
                            </div>
                        </div>
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="year" name="year" type="text" placeholder="Release Year" className="form-control" required onChange={this.handleChange}  />
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="type" name="type" type="text" placeholder="Movie type" className="form-control" required onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="type" name="poster" type="text" placeholder="Movie Poster" className="form-control" required onChange={this.handleChange}  />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn  btn-lg" >Add Movie</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
)}
}