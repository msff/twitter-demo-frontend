import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import pinned from "./icons/icon-pinned.svg";
import likes from "./icons/icon-hearts.svg";
import replies from "./icons/icon-replies.svg";
import retweets from "./icons/icon-retweets.svg";
import direct from "./icons/icon-direct.svg";

const TweetWrapper = styled.section`
  padding: 8px 10px 8px 10px;
  border-bottom: 1px solid #d8d8d8;
  //width: 100%;
  background-color: #fff;
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
  margin-bottom: 3px;
  max-width: 100%;
  max-height: 250px;
`;

const ActionWrapper = styled.div`
  margin-top: 13px;

  margin-bottom: 3px;
  max-width: 50%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const ActionBlock = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ActionIcon = styled.img`
  max-height: 14px;
  margin-right: 7px;
  margin-left: 3px;
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
        {props.tweet.img && <Image src={imageurl} />}

        <ActionWrapper>
          <ActionBlock to={props.tweet + "/reply"}>
            <ActionIcon src={replies} />
            <ActionCount>{props.tweet.actions.replies}</ActionCount>
          </ActionBlock>
          <ActionBlock to={props.tweet + "/retweet"}>
            <ActionIcon src={retweets} />
            <ActionCount>{props.tweet.actions.retweets}</ActionCount>
          </ActionBlock>
          <ActionBlock to={props.tweet + "/like"}>
            <ActionIcon src={likes} />
            <ActionCount>{props.tweet.actions.likes}</ActionCount>
          </ActionBlock>
          <ActionBlock to={props.tweet + "/send"}>
            <ActionIcon src={direct} />
          </ActionBlock>
        </ActionWrapper>
      </TweetContentWrapper>
    </TweetWrapper>
  );
}

// function TweetsFeed(props) {
//   const tweetsfeed = [];
//   props.tweets.forEach(function(tweet, index) {
//     tweetsfeed.push(<Tweet tweet={tweet} key={index} />);
//     console.log({ tweetsfeed });
//   });
//   return tweetsfeed;
// }

export default function TweetsFeed(props) {
  const tweetsfeed = props.tweets.map((tweet, index) => (
    <Tweet key={index} tweet={tweet} />
  ));
  console.log(tweetsfeed);
  return tweetsfeed;
}
