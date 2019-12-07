import React from 'react';
import Navbar from './components/Navbar'
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path ="/" component={Home}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
