

const DeleteMovie = (movies) =>{
    movies.map(movie => {
        let myMovie = JSON.parse(localStorage.getItem("movie"));
        myMovie.splice(movie.id,1);
    // localStorage.setItem("myMovie",JSON.stringify(myMovie))
        localStorage.setItem("movie", JSON.stringify(movie))
    });
    }

    export default DeleteMovie;