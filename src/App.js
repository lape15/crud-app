import React from "react";
import Navbar from "./components/Navbar";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import "./scss/main.scss";
import NewMovie from "./components/NewMovie";
import EditMovie from "./components/EditMovie";
import DeleteMovie from "./components/DeleteMovie"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewMovie} />
          <Route exact path="/edit/:id" component={EditMovie} />
          <Route exact path="/delete/:id" component={DeleteMovie}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
