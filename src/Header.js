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

import logo from "./icons/icon-twitter-logo.svg";
import iconHome from "./icons/icon-home.svg";
import iconMoments from "./icons/icon-moments.svg";
import iconMessages from "./icons/icon-messages.svg";
import iconNotifications from "./icons/icon-notifications.svg";
import iconMagnifier from "./icons/icon-magnifier.svg";

import { ActionButton } from "./App";

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
`;

const HeaderElement = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const StNavLink = styled(NavLink)`
  padding-top: 6px;
  padding-bottom: 6px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-content: center;
  text-decoration: none;
  cursor: pointer;
`;

const NavIcon = styled.img`
  max-height: 18px;
  max-width: 18px;
  margin-right: 8px;
`;
const NavLabel = styled.span`
  font-weight: bold;
  font-size: 13px;
  color: #667580;
`;

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
  font-size: 12px;
  padding-left: 11px;
  padding-top: 9px;
  padding-bottom: 9px;
  width: 220px;
`;

const Logo = styled.img`
  width: 20px;
  padding-top: 4px;
`;

const Avatar = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  width: 26px;
  height: 26px;
  display: flex;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row between-lg middle-lg">
            <HeaderElement>
              <StNavLink to="/home">
                <NavIcon src={iconHome} alt="Home" />
                <NavLabel>Home</NavLabel>
              </StNavLink>
              <StNavLink to="/moments">
                <NavIcon src={iconMoments} alt="Moments" />
                <NavLabel>Moments</NavLabel>
              </StNavLink>
              <StNavLink to="/notifications">
                <NavIcon src={iconNotifications} alt="Notifications" />
                <NavLabel>Notifications</NavLabel>
              </StNavLink>
              <StNavLink to="/messages">
                <NavIcon src={iconMessages} alt="Messages" />
                <NavLabel>Messages</NavLabel>
              </StNavLink>
            </HeaderElement>
            <HeaderElement>
              <Logo src={logo} alt="logo" />
            </HeaderElement>
            <HeaderElement>
              <SearchInput placeholder="Search Twitter" />
              <NavLink to="/">
                <Avatar
                  src={process.env.PUBLIC_URL + "/img/ei-avatar-small.jpg"}
                />
              </NavLink>
              <NavLink to="/newtweet">
                <ActionButton>Tweet</ActionButton>
              </NavLink>
            </HeaderElement>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Header;
