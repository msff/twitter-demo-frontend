import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const StatsBlockValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #707e88;
  text-align: center;
  display: block;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  padding-bottom: 0;
  &.active {
    color: #1da1f2;
  }
`;

const StatsBlock = styled(NavLink)`
  padding: 14px 15px 9px 15px;
  display: inline-block;
  color: #1da1f2;
  text-decoration: none;
  cursor: pointer;
  &.active {
    border-bottom: 4px solid #1da1f2;
  }
`;

function Stats(props) {
  return (
    <div>
      <StatsWrapper>
        <div className="container">
          <div className="row middle-lg">
            <div className="col-lg-offset-3 col-lg-6 start-lg">
              <StatsBlock to="/EveryInteract/tweets">
                <StatsBlockHeader>Tweets</StatsBlockHeader>
                <StatsBlockValue>8,058</StatsBlockValue>
              </StatsBlock>
              <StatsBlock to="/EveryInteract/following">
                <StatsBlockHeader>Following</StatsBlockHeader>
                <StatsBlockValue>721</StatsBlockValue>
              </StatsBlock>
              <StatsBlock to="/EveryInteract/followers">
                <StatsBlockHeader>Followers</StatsBlockHeader>
                <StatsBlockValue>1,815</StatsBlockValue>
              </StatsBlock>
              <StatsBlock to="/EveryInteract/likes">
                <StatsBlockHeader>Likes</StatsBlockHeader>
                <StatsBlockValue>460</StatsBlockValue>
              </StatsBlock>
              <StatsBlock to="/EveryInteract/lists">
                <StatsBlockHeader>Lists</StatsBlockHeader>
                <StatsBlockValue>2</StatsBlockValue>
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
