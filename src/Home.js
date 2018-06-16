import React, { Component } from "react";
import styled, { css } from "styled-components";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "normalize.css";
import "flexboxgrid2";

import { ActionButton } from "./App";

const StHeaderImage = styled.img`
  max-width: 100%;
  max-height: 380px;
`;

const StatsBlockHeader = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #707e88;
  text-align: center;
  display: block;
`;

const StatsBlockValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #707e88;
  text-align: center;
  display: block;
  ${props =>
    props.type === "selected" &&
    css`
      color: #1da1f2;
    `};
`;

const StStatsBlock = styled(StatsBlock)`
  padding: 14px 15px 9px 15px;
  display: inline-block;
  ${props =>
    props.type === "selected" &&
    css`
      border-bottom-width: 4px;
      border-bottom-style: solid;
      border-color: #1da1f2;
    `};
`;

function StatsBlock(props) {
  return (
    <a className={props.className} href={props.href}>
      <StatsBlockHeader>{props.header}</StatsBlockHeader>
      <StatsBlockValue type={props.type}>{props.value}</StatsBlockValue>
    </a>
  );
}

const TweetsHeaderItem = styled(TweetsHeader)`
  padding: 15px 16px 10px 16px;
  display: inline-block;
  color: #1da1f2;
  ${props =>
    props.selected &&
    css`
      color: #000000;
    `};
`;

const TweetsHeaderPane = styled.div`
  background-color: #ffffff;
  height: 45px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #d8d8d8;
`;

function TweetsHeader(props) {
  return (
    <TweetsHeaderPane>
      <a href={props.tweetslink}>
        {/* понятно, что здесь не стоит хардкодить названия, но я пока не разобрался, как передавать массив */}
        <TweetsHeaderItem>Tweets</TweetsHeaderItem>
      </a>
      <a href={props.replieslink}>
        <TweetsHeaderItem>Tweets & Replies</TweetsHeaderItem>
      </a>
      <a href={props.medialink}>
        <TweetsHeaderItem>Media</TweetsHeaderItem>
      </a>
    </TweetsHeaderPane>
  );
}

// eslint-disable-next-line
const TweetWrapper = styled.div`
  padding: 8px 10px 8px 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #d8d8d8;
`;
// eslint-disable-next-line
const TweetContentWrapper = styled.div`
  margin-left: 60px;
`;

// eslint-disable-next-line

function Tweet(props) {
  return <div>ald</div>;
}

// eslint-disable-next-line
function Tweets(props) {
  return (
    <div className={props.className}>
      <TweetsHeader />
      <Tweet />
    </div>
  );
}

function Home(props) {
  return (
    <div className={props.className}>
      <StHeaderImage
        src={process.env.PUBLIC_URL + "img/ei-cover.jpg"}
        alt="everyinteract"
      />
      <div className="Statistics-pane">
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-3 col-lg-6 start-lg">
              <StStatsBlock header="Tweets" value="8,058" type="selected" />
              <StStatsBlock header="Following" value="721" />
              <StStatsBlock header="Followers" value="1,815" />
              <StStatsBlock header="Likes" value="460" />
              <StStatsBlock header="Lists" value="2" />
            </div>
            <ActionButton>Follow</ActionButton>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-offset-3 col-lg-6 start-lg">
            <Tweet />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Home;
