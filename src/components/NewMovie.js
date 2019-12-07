import React, {Component} from 'react';

// const container = {
//     "alignItems" : "center"
// }

const button ={
    float : "left",
    backgroundColor : "salmon"
}
const input = {
    backgroundColor : "#FFFFFF",
    color : "black"
}

export default class NewMovie extends Component{
    render(){
        return (
        <div class="container" >
            <div class="row">
                <div class="col-md-12">
                     <div class="well well-sm">
                     <form class="form-horizontal" method="post">
                    <fieldset>
                        <h4 class="text-left header"> New Movie</h4>
                            <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="title" name="Title" type="text" placeholder="Movie Title" class="form-control" style={input}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="year" name="Year" type="date" placeholder="Release Year" class="form-control" style={input}/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="type" name="Type" type="text" placeholder="Movie type" class="form-control" style={input} />
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="type" name="Poster" type="text" placeholder="Movie Poster" class="form-control" style={input} />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn  btn-lg" style={button}>Add Movie</button>
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