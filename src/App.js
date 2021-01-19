import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Header from "./components/Header";
import FooterPage from "./components/FooterPage";
class App extends Component {
  render() {
    return (
        <Router>
          <Navigation />

          <Switch>
              <Route exact path="/" component={Header} />
              <Route exact path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
          </Switch>
            <FooterPage />
        </Router>
    );
  }
}

export default App;