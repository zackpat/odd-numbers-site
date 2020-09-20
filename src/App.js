import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Objects from './components/Objects'
import Projects from './components/Projects'

import logo from './logo.png';

import './App.css';
import './static/fonts/Krungthep.woff'
import './static/fonts/Krungthep.woff2'

function App() {
  return (
    <Router>
      <div>
        <div className="nav-container">
          <div className="logo-container">
            <NavLink to="/">
              <img src={logo} alt="Odd Numbers Logo" className="App-logo"/>
            </NavLink>
          </div>
          <div className="links-container">
            <span className="nav-link">
              <NavLink to="/projects" activeClassName="selected-route">projects</NavLink>
            </span>
            <span className="nav-link">
              <NavLink to="/objects" activeClassName="selected-route">objects</NavLink>
            </span>
            <span className="nav-link">
              <NavLink to="/about" activeClassName="selected-route">about</NavLink>
            </span>
            <span className="nav-link">
              <NavLink to="/contact" activeClassName="selected-route">contact</NavLink>
            </span>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/objects">
            <Objects />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
