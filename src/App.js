import React from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Works from "./components/Works";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
     <Router>
       <nav className= "myNav">
         <Link to="/">Home</Link>
         <Link to="/about">About Me</Link>
         <Link to="/contacts">Contacts</Link>
         <Link to="works">My Works</Link>
        </nav>
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
