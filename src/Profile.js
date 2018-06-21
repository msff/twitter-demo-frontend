import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Stats from "./Stats.js";
import LeftSection from "./Leftsection";

import pinned from "./icons/icon-pinned.svg";
import hearts from "./icons/icon-hearts.svg";
import replies from "./icons/icon-replies.svg";
import retweets from "./icons/icon-retweets.svg";
import direct from "./icons/icon-direct.svg";

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

// Main Tweets Components

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

// Tweets

const TweetsSection = styled.div`
  width: 100%;
  background-color: #fff;
`;

const TweetWrapper = styled.section`
  padding: 8px 10px 8px 10px;
  border-bottom: 1px solid #d8d8d8;
`;

const TweetContentWrapper = styled.div`
  margin-left: 60px;
`;

const Pinned = styled.div`
  margin-left: 37px;
  margin-bottom: 4px;
`;

const PinnedIcon = styled.img`
  height: 12px;
  display: inline-block;
  margin-right: 12px;
  vertical-align: middle;
`;

const PinnedLabel = styled.span`
  font-size: 12px;
  color: #707e88;
`;

const TweetHeader = styled.div``;

const TweetAvatar = styled.img`
  position: absolute;
  margin-left: -60px;
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
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 300;
`;

const Image = styled.img`
  margin-top: 13px;
  margin-bottom: 13px;
  max-width: 100%;
  max-height: 250px;
`;

const ActionWrapper = styled.div`
  margin-bottom: 3px;
  max-width: 50%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const ActionBlock = styled.div``;

const ActionIcon = styled.img`
  max-height: 14px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
`;

const ActionCount = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: #667580;
`;

function Tweet(props) {
  const avatarurl = `${process.env.PUBLIC_URL}${props.tweet.profile.avatar}`;
  const imageurl = `${process.env.PUBLIC_URL}${props.tweet.img}`;

  return (
    <TweetWrapper>
      {props.tweet.pinned && (
        <Pinned>
          <PinnedIcon src={pinned} alt="pinned" />
          <PinnedLabel>Pinned Tweet</PinnedLabel>
        </Pinned>
      )}

      <TweetContentWrapper>
        <TweetHeader>
          <TweetAvatar src={avatarurl} />
          <ProfileFullName>{props.tweet.profile.fullname}</ProfileFullName>
          <span>&nbsp;</span>
          <ProfileUserName>{props.tweet.profile.username}</ProfileUserName>
        </TweetHeader>
        <Caption>{props.tweet.caption}</Caption>
        <Image src={imageurl} />
        <ActionWrapper>
          <ActionBlock>
            <ActionIcon src={replies} />
            <ActionCount />
          </ActionBlock>
          <ActionBlock>
            <ActionIcon src={retweets} />
            <ActionCount>74</ActionCount>
          </ActionBlock>
          <ActionBlock>
            <ActionIcon src={hearts} />
            <ActionCount>18</ActionCount>
          </ActionBlock>
          <ActionBlock>
            <ActionIcon src={direct} />
            <ActionCount>1</ActionCount>
          </ActionBlock>
        </ActionWrapper>
      </TweetContentWrapper>
    </TweetWrapper>
  );
}

const tweet1 = {
  pinned: true,
  profile: {
    avatar: "/img/ei-avatar-medium.jpg",
    fullname: "Every Interaction",
    username: "@EveryInteract"
  },
  caption:
    "We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
  img: "/img/tweet-image.jpg"
};

const tweet2 = {
  pinned: false,
  profile: {
    avatar: "/img/ei-avatar-medium.jpg",
    fullname: "Every Interaction",
    username: "@EveryInteract"
  },
  caption:
    "Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/",
  img: ""
};

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
            <TweetsSection>
              <Tweet tweet={tweet1} />
              <Tweet tweet={tweet2} />
            </TweetsSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
