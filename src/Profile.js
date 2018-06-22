import React from "react";
import styled, { extend } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Stats from "./Stats.js";
import LeftSection from "./Leftsection";
import TweetsFeed from "./Tweets";
import RightSection from "./RightSection";

import { ActionButton } from "./App";

// Header images

const StHeaderImage = styled.img`
  max-width: 100%;
  max-height: 380px;
`;

const BigAvatar = styled.div`
  position: absolute;
  top: 250px;
  z-index: 3;
  width: 210px;
  height: 210px;

  border-radius: 100%;
  border: 1px solid #E7ECF0;
  background-color: #fff;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center center;
`;

// Navigation bar

const TweetsNavLink = styled(NavLink)`
  padding: 15px 15px 10px 15px;
  color: #1da1f2;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #ecc069;
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

// Tweets Array

const tweets = [
  {
    id: 1,
    pinned: true,
    profile: {
      avatar: "/img/ei-avatar-medium.jpg",
      fullname: "Every Interaction",
      username: "@EveryInteract"
    },
    caption:
      "We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
    img: "/img/tweet-image.jpg",
    actions: {}
  },

  {
    id: 2,
    pinned: false,
    profile: {
      avatar: "/img/ei-avatar-medium.jpg",
      fullname: "Every Interaction",
      username: "@EveryInteract"
    },
    caption:
      "Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/",
    img: "",
    actions: {
      replies: 23,
      retweets: 40,
      retweeted: false,
      likes: 45,
      liked: true
    }
  }
];

function Profile(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <BigAvatar
              src={process.env.PUBLIC_URL + "/img/ei-avatar-large.png"}
            />
          </div>
        </div>
      </div>
      <StHeaderImage
        src={process.env.PUBLIC_URL + "/img/ei-cover.jpg"}
        alt="everyinteract"
      />

      <Stats />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 start-lg">
            <LeftSection />
          </div>
          <div className="col-lg-6 start-lg">
            <TweetsNav>
              <TweetsNavLink to="tweets">Tweets</TweetsNavLink>
              <TweetsNavLink to="replies">Tweets & replies</TweetsNavLink>
              <TweetsNavLink to="media">Media</TweetsNavLink>
            </TweetsNav>

            <TweetsFeed tweets={tweets} />
          </div>
          <div className="col-lg-3">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
