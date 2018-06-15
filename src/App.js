import React, { Component } from "react";
import styled, { css } from "styled-components";
import "normalize.css";
import "flexboxgrid2";
import "./App.css";

import logo from "./icons/icon-twitter-logo.svg";
import iconHome from "./icons/icon-home.svg";
import iconMoments from "./icons/icon-moments.svg";
import iconMessages from "./icons/icon-messages.svg";
import iconNotifications from "./icons/icon-notifications.svg";
import iconMagnifier from "./icons/icon-magnifier.svg";

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
  font-size: 12px;
  padding-left: 11px;
  padding-top: 9px;
  padding-bottom: 9px;
  width: 220px;
  display: inline-block;
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
    <a href={props.href}>
      <button className={props.className}>{props.text}</button>
    </a>
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
`;

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

function StatsBlock(props) {
  return (
    <a className={props.className} href={props.href}>
      <StatsBlockHeader>{props.header}</StatsBlockHeader>
      <StatsBlockValue type={props.type}>{props.value}</StatsBlockValue>
    </a>
  );
}

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
                <StActionButton text="Tweet" href="https://twitter.com" />
              </div>
            </div>
          </div>
        </header>

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
              <StActionButton text="Follow" href="https://twitter.com" />
            </div>
          </div>
        </div>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-3 col-lg-6 start-lg" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
