import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";

import ContactState from "./contexts/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
          <Footer className="footer" />
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;