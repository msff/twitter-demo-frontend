import React, { Component } from "react";
import styled, { css } from "styled-components";
import logo from "./logo.svg";
import "normalize.css";
import "./App.css";

const HeaderImage = styled.img`
  width: ;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: black;
  border: 2px solid palevioletred;

  ${props =>
    props.primary &&
    css`
      border-radius: 10px;

      background: palevioletred;
      color: #43b2f2;
    `};
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Обычная кнопка</Button>
        <Button primary>Розовая кнопка</Button>
      </div>
    );
  }
}

export default App;
