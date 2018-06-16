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

// function Avatar(props) {
//   return (
//     <div>
//       <a href={props.href}>
//         <AvatarImg src={props.src} alt="avatar" />
//       </a>
//     </div>
//   );
// }

// function ActionButton(props) {
//   return (
//     <a href={props.href}>
//       <button className={props.className}>{props.text}</button>
//     </a>
//   );
// }

export const ActionButton = styled.button`
  width: 72px;
  height: 32px;
  background-color: #1da1f2;
  border-style: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
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
