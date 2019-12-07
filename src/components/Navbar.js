 import React, { Component } from 'react'
 import {NavLink} from 'react-router-dom';


 const bar = {
     "backgroundColor" : "#BC6680"
     
 }
 
 const textColor = {
     "color" : "black"
 }

 export default class Navbar extends Component {
   render() {
     return (
       <>
        <nav className="navbar navbar-expand-md " style={bar}>
    <NavLink to="/" className="navbar-brand"style={textColor}>Brand</NavLink>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
            <NavLink to="/" className="nav-item nav-link active" style={textColor}>Home</NavLink>
            <NavLink to="/" className="nav-item nav-link" style={textColor}>About</NavLink>
            <NavLink to="/" className="nav-item nav-link" style={textColor} >Products</NavLink>
        </div>
        <form className="form-inline ml-auto">
            <input type="text" className="form-control mr-sm-2" placeholder="Search"/>
            <button type="submit" className="btn btn-outline-light">Search</button>
        </form>
    </div>
</nav>
   </>
     )
   }
 }
 