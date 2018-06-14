import React, { Component } from "react";
// eslint-disable-next-line
import styled, { css } from "styled-components";
// import "normalize";
import "flexboxgrid2";

import logo from "./icons/icon-twitter-logo.svg";

import iconHome from "./icons/icon-home.svg";
import iconMoments from "./icons/icon-moments.svg";
import iconMessages from "./icons/icon-messages.svg";
import iconNotifications from "./icons/icon-notifications.svg";
import iconMagnifier from "./icons/icon-magnifier.svg";

import "./App.css";

const NavIcon = styled.img`
  max-height: 18px;
  max-width: 18px;

  vertical-align: middle;
  margin-right: 8px;
`;
const NavLabel = styled.p`
  display: inline;
  font-weight: bold;
  font-size: 13px;
  color: #667580;
  margin-right: 20px;
`;

function NavLink(props) {
  return (
    <div className="Nav-button">
      <NavIcon src={props.icon} alt={props.label} />
      <NavLabel margin={props.margin}>{props.label}</NavLabel>
    </div>
  );
}

const SearchInput = styled.input`
  border-radius: 100px;
  border-color: #e6ecf0;
  border-style: solid;
  border-width: 1px;
  background-image: url(${iconMagnifier});
  background-repeat: no-repeat;
  background-position: center right 12px;
  background-size: 15px 15px;
  background-color: #f5f8fa;
  line-height: 14px;
  padding-left: 11px;
  padding-top: 9px;
  padding-bottom: 9px;
  width: 220px;
`;

const AvatarImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 26px;
  height: 26px;
`;

function Avatar(props) {
  return (
    <div>
      <a href={props.href}>
        <AvatarImg src={props.src} alt="avatar" />
      </a>
    </div>
  );
}

function ActionButton(props) {
  return (
    <div className={props.className}>
      <a href={props.href}>{props.text}</a>
    </div>
  );
}

const StActionButton = styled(ActionButton)`
  width: 72px;
  height: 32px;
  background-color: #1da1f2;
  border-style: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;

const StHeaderImage = styled.img`
  max-width: 100%;
  max-height: 380px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header-pane">
          <div className="container">
            <div className="row between-xs">
              <div className="row Header-row">
                <NavLink icon={iconHome} label="Home" margin="8px" />
                <NavLink icon={iconMoments} label="Moments" margin="8px" />
                <NavLink
                  icon={iconNotifications}
                  label="Notifications"
                  margin="8px"
                />
                <NavLink icon={iconMessages} label="Messages" margin="8px" />
              </div>
              <div className="row header-row">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="row header-row">
                <SearchInput placeholder="Search Twitter" />
                <Avatar
                  src={process.env.PUBLIC_URL + "img/ei-avatar.jpg"}
                  href="./"
                />
                <StActionButton text="Tweet" />
              </div>
            </div>
          </div>
        </header>

        <StHeaderImage
          src={process.env.PUBLIC_URL + "img/ei-cover.jpg"}
          alt="everyinteract"
        />
      </div>
    );
  }
}

export default App;
