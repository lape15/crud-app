import React from 'react';
import Navbar from './components/Navbar'
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import './scss/main.scss'
import  NewMovie  from './components/NewMovie';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path = "/new" component={NewMovie}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
