import React from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Works from "./components/Works";
import NavBar1 from "./components/NavBar1";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="bgImage">
     <Router>
       <NavBar1 />
        <Switch>
        <Route path="/works">
           <Works />
          </Route>
        <Route path="/contacts">
           <Contacts />
          </Route>
        <Route path="/about">
          <AboutMe />
          </Route>
        <Route path="/">
           <Home />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
