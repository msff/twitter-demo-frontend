import React, { Component } from "react";
import styled, { css } from "styled-components";
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "normalize.css";
import "flexboxgrid2";

import pinned from "./icons/icon-pinned.svg";

import { ActionButton } from "./App";

// Stats Block Components

const StHeaderImage = styled.img`
  max-width: 100%;
  max-height: 380px;
`;

const StatsWrapper = styled.div`
  background-color: #ffffff;
  height: 60px;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const StatsBlockHeader = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #707e88;
  text-align: center;
  display: block;
`;

const StatsBlockValue = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  color: #707e88;
  text-align: center;
  display: block;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #1da1f2;
  }
`;

const StatsBlock = styled(NavLink)`
  padding: 14px 15px 9px 15px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  &.active {
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-color: #1da1f2;
  }
`;

function Stats(props) {
  return (
    <div>
      <StHeaderImage
        src={process.env.PUBLIC_URL + "/img/ei-cover.jpg"}
        alt="everyinteract"
      />
      <StatsWrapper>
        <div className="container">
          <div className="row middle-lg">
            <div className="col-lg-offset-3 col-lg-6 start-lg">
              <StatsBlock to="/tweets">
                <StatsBlockHeader>Tweets</StatsBlockHeader>
                <StatsBlockValue to="/tweets">8,058</StatsBlockValue>
              </StatsBlock>
              <StatsBlock to="/following">
                <StatsBlockHeader>Following</StatsBlockHeader>
                <StatsBlockValue to="/following">721</StatsBlockValue>
              </StatsBlock>
              <StatsBlock to="/followers">
                <StatsBlockHeader>Followers</StatsBlockHeader>
                <StatsBlockValue to="/followers">1,815</StatsBlockValue>
              </StatsBlock>
              <StatsBlock to="/likes">
                <StatsBlockHeader>Likes</StatsBlockHeader>
                <StatsBlockValue to="/likes">460</StatsBlockValue>
              </StatsBlock>
              <StatsBlock to="/lists">
                <StatsBlockHeader>Lists</StatsBlockHeader>
                <StatsBlockValue to="/lists">2</StatsBlockValue>
              </StatsBlock>
            </div>
            <div className="c col-lg-3 end-lg">
              <ActionButton outline>Follow</ActionButton>
            </div>
          </div>
        </div>
      </StatsWrapper>
    </div>
  );
}

export default Stats;
