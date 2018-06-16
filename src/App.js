import React, { Component } from "react";
import styled, { css } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Helmet } from "react-helmet";

import "normalize.css";
import "flexboxgrid2";
import "./App.css";

import Home from "./Home";
import Header from "./Header";

export const ActionButton = styled.button`
  width: 72px;
  height: 32px;
  background-color: #1da1f2;
  border-style: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  ${props =>
    props.outline &&
    css`
      background-color: #fff;
      color: #1da1f2;
      border-color: #1da1f2;

      border-style: solid;
      border-width: 1px;
    `};
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>Every Interactive — Twitter</title>
          </Helmet>
          <Switch>
            <Redirect exact from="/" to="/EveryInteract" />
          </Switch>
          <header>
            <Route path="/" component={Header} />
          </header>
          <main>
            <Route path="/EveryInteract" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/moments" component={Home} />
            <Route path="/notifications" component={Home} />
            <Route path="/messages" component={Home} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
