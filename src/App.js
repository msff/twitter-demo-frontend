import React, { Component } from "react";
import styled, { css } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Helmet } from "react-helmet";

import Profile from "./Profile";
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
      border: 1px solid #1da1f2;
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
            <Header />
          </header>
          <main>
            <Route path="/EveryInteract" component={Profile} />
            <Route path="/home" component={Profile} />
            <Route path="/moments" component={Profile} />
            <Route path="/notifications" component={Profile} />
            <Route path="/messages" component={Profile} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
