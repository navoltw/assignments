import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Master_Detail from "./components/Master_Detail";
import Grid from "./components/Grid";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Redirect exact path = "/" to = "/Master_Detail" />
            <Route path = "/Master_Detail" component = { Master_Detail } />
            <Route path = "/Grid" component = { Grid } />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
