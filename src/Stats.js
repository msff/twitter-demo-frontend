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

import { ActionButton } from "./App";

// Stats Block Components

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
  width: 100%;
  padding-bottom: 10px;
  &.active {
    color: #1da1f2;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-color: #1da1f2;
  }
`;

const StatsBlock = styled.div`
  padding: 14px 15px 9px 15px;
  display: inline-block;
  color: #1da1f2;
`;

function Stats(props) {
  return (
    <div>
      <StatsWrapper>
        <div className="container">
          <div className="row middle-lg">
            <div className="col-lg-offset-3 col-lg-6 start-lg">
              <StatsBlock>
                <StatsBlockHeader>Tweets</StatsBlockHeader>
                <StatsBlockValue to="/EveryInteract/tweets">
                  8,058
                </StatsBlockValue>
              </StatsBlock>
              <StatsBlock>
                <StatsBlockHeader>Following</StatsBlockHeader>
                <StatsBlockValue to="/EveryInteract/following">
                  721
                </StatsBlockValue>
              </StatsBlock>
              <StatsBlock>
                <StatsBlockHeader>Followers</StatsBlockHeader>
                <StatsBlockValue to="/EveryInteract/followers">
                  1,815
                </StatsBlockValue>
              </StatsBlock>
              <StatsBlock>
                <StatsBlockHeader>Likes</StatsBlockHeader>
                <StatsBlockValue to="/EveryInteract/likes">460</StatsBlockValue>
              </StatsBlock>
              <StatsBlock>
                <StatsBlockHeader>Lists</StatsBlockHeader>
                <StatsBlockValue to="/EveryInteract/lists">2</StatsBlockValue>
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
