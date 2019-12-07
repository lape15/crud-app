import React, {Component} from 'react'
 import {NavLink} from 'react-router-dom';

export default class Home extends Component {

    handleClick = () => {
        alert('You are here so shine your eyes wella')
    }
    render(){
        
        return (
            <>
            <div className="jumbotron">
                <h1 className="display-4">Hello!</h1>
                     <p className="lead">This is a simple website.</p>
                     Downloading progress:
                    <progress value="50" max="100"></progress>
                        <hr className="my-4"/>
                    <p> Gonna be creating, updating, deleting and reading </p>
                        <NavLink className="btn btn-warning btn-lg" to="/new" role="button" onClick={this.handleClick}>Click me!</NavLink>
                    </div>
                </>
            )
    }
}