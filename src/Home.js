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
import Stats from "./Stats.js";

// Main Tweets Components

const Tweets = styled.div`
width: 100%
background-color: #fff;
`;

const TweetsNavLink = styled(NavLink)`
  padding: 15px 15px 10px 15px;
  color: #1da1f2;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const TweetsNav = styled.div`
  margin-top: 8px;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #d8d8d8;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
`;

const TweetsSection = styled.div`
width: 100%
background-color: #fff;
`;

// eslint-disable-next-line
const TweetWrapper = styled.section`
  padding: 8px 10px 8px 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #d8d8d8;
`;
// eslint-disable-next-line
const TweetContentWrapper = styled.div`
  margin-left: 60px;
`;

const Pinned = styled.div`
  margin-left: 48px;
  margin-bottom: 4px;
`;

const PinnedIcon = styled.img`
  height: 12px;
  display: inline-block;
  margin-right: 12px;
`;

const PinnedLabel = styled.span`
  font-size: 12px;
  color: #707e88;
`;

const TweetHeader = styled.div``;

const TweetAvatar = styled.img`
  position: absolute;
  margin-left: -50px;
  width: 50px;
`;

const ProfileFullName = styled.span`
  color: #292f33;
  font-size: 15px;
  font-weight: 500;
`;

const ProfileUserName = styled.span`
  color: #707e88;
  font-size: 13px;
  font-weight: 500;
`;

const Caption = styled.p`
  margin: 0px;

  font-size: 24px;
  font-weight: 300;
`;

const tweet1 = {
  profile: {
    avatar: "/img/ei-avatar-medium.jpg",
    fullname: "Every Interaction",
    username: "@EveryInteract"
  },
  caption:
    "We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
};

function Tweet(props) {
  const avatarurl = `${process.env.PUBLIC_URL}${props.tweet.profile.avatar}`;
  return (
    <TweetWrapper>
      <Pinned>
        <PinnedIcon src={pinned} alt="pinned" />
        <PinnedLabel>Pinned Tweet</PinnedLabel>
      </Pinned>
      <TweetContentWrapper>
        <TweetHeader>
          <TweetAvatar src={avatarurl} />
          <ProfileFullName>{props.tweet.profile.fullname}</ProfileFullName>
          <span>&nbsp;</span>
          <ProfileUserName>{props.tweet.profile.username}</ProfileUserName>
        </TweetHeader>
        <Caption>{props.tweet.caption}</Caption>
      </TweetContentWrapper>
    </TweetWrapper>
  );
}

function Home(props) {
  return (
    <div className={props.className}>
      <Stats />
      <div className="container">
        <div className="row">
          <div className="col-lg-offset-3 col-lg-6 start-lg">
            <TweetsNav>
              <TweetsNavLink to="/tweets">Tweets</TweetsNavLink>
              <TweetsNavLink to="/replies">Tweets & replies</TweetsNavLink>
              <TweetsNavLink to="/media">Media</TweetsNavLink>
            </TweetsNav>
            <TweetsSection>
              <Tweet tweet={tweet1} />
            </TweetsSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
