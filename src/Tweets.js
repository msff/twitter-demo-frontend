import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import pinned from "./icons/icon-pinned.svg";
import likes from "./icons/icon-hearts.svg";
import likesFilled from "./icons/icon-hearts-filled.svg";
import replies from "./icons/icon-replies.svg";
import retweets from "./icons/icon-retweets.svg";
import direct from "./icons/icon-direct.svg";

// Wrappers

const TweetWrapper = styled.section`
  padding: 8px 10px 8px 10px;
  border-bottom: 1px solid #d8d8d8;
  //width: 100%;
  background-color: #fff;
`;

const TweetContentWrapper = styled.div`
  margin-left: 60px;
`;

// Pinned

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

// Main content

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
  ${props =>
    props.small &&
    css`
      font-size: 16px;
      line-height: 22px;
      font-weight: 400;
    `};
`;

const Image = styled.img`
  margin-top: 13px;
  margin-bottom: 3px;
  max-width: 100%;
  max-height: 250px;
`;

// Link preview

const OGLinkPreview = styled.a`
  margin-top: 13px;
  margin-bottom: 3px;
  display: flex;

  flex-direction: row;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;
`;

const OGLinkImage = styled.img`
  margin-right: 9px;
  border-right: 1px solid #e1e8ed;
  height: 126px;
`;

const OGLinkTitle = styled.p`
  margin: 11px 0 0 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
`;

const OGLinkDescription = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 63px;
`;

const OGLinkURL = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #8899a6;
`;

// Actions block

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
  color: ${props => (props.liked ? "#E2264D" : "#667580")};
`;

function Tweet(props) {
  const avatarurl = `${process.env.PUBLIC_URL}${props.tweet.profile.avatar}`;
  const imageurl = `${process.env.PUBLIC_URL}${props.tweet.img}`;
  // const caption = `{
  //           __html: ${props.tweet.caption}
  //         }`;

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
        <Caption small={props.tweet.link}>{props.tweet.caption}</Caption>
        {props.tweet.img && <Image src={imageurl} />}
        {props.tweet.link && (
          <OGLinkPreview href={props.tweet.link.url}>
            <OGLinkImage
              src={props.tweet.link.image}
              alt={props.tweet.link.title}
            />
            <div>
              <OGLinkTitle>{props.tweet.link.title}</OGLinkTitle>
              <OGLinkDescription>
                {props.tweet.link.description}
              </OGLinkDescription>
              <OGLinkURL>{props.tweet.link.url}</OGLinkURL>
            </div>
          </OGLinkPreview>
        )}

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
            {props.tweet.actions.liked ? (
              <ActionIcon src={likesFilled} />
            ) : (
              <ActionIcon src={likes} />
            )}
            <ActionCount liked={props.tweet.actions.liked}>
              {props.tweet.actions.likes}
            </ActionCount>
          </ActionBlock>
          <ActionBlock to={props.tweet + "/send"}>
            <ActionIcon src={direct} />
          </ActionBlock>
        </ActionWrapper>
      </TweetContentWrapper>
    </TweetWrapper>
  );
}

export default function TweetsFeed(props) {
  const tweetsfeed = props.tweets.map((tweet, index) => (
    <Tweet key={index} tweet={tweet} />
  ));
  return tweetsfeed;
}
