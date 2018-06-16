import React, { Component } from "react";
import styled, { css } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
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
      <Router basename="/EveryInteract">
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Route path="/" component={Home} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
