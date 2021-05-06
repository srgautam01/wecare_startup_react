import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";
import "./App.css";
import Footer from "../footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="page-container">
          <h1>We Care</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <div className="content mb-3">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={About} />
            <Route
              path="/contact"
              component={() => <Contact title="Contact Form" />}
            />
          </div>
        </div>

        <Footer />
      </HashRouter>
    );
  }
}

export default App;
