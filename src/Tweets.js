import React from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Parser from 'html-react-parser';

import pinned from './icons/icon-pinned.svg';
import likes from './icons/icon-hearts.svg';
import likesFilled from './icons/icon-hearts-filled.svg';
import replies from './icons/icon-replies.svg';
import retweets from './icons/icon-retweets.svg';
import direct from './icons/icon-direct.svg';

// Navigation bar

const StNavLink = styled(NavLink)`
  padding: 15px 15px 10px 15px;
  color: #1da1f2;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #ecc069;
  }
`;

const NavWrapper = styled.div`
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

// Wrappers

const MainWrapper = styled.section`
  padding: 8px 10px 8px 10px;
  border-bottom: 1px solid #d8d8d8;
  //width: 100%;
  background-color: #fff;
`;

const ContentWrapper = styled.div`
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

const Header = styled.div``;

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

const Caption = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 300;
  ${({ small }) => small
    && css`
      font-size: 16px;
      line-height: 22px;
      font-weight: 400;
    `};
`;

const Image = styled.img`
  max-height: 250px;
  flex-basis: 30px;
  flex-grow: 0;
`;

const ImageWrapper = styled.div`
  margin-top: 13px;
  margin-bottom: 3px;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  flex-basis: 30px;
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
  color: ${({ liked }) => (liked ? '#E2264D' : '#667580')};
`;

function TweetsNav({ username }) {
  return (
    <NavWrapper>
      <StNavLink exact to={`/${username}/`}>
        Tweets
      </StNavLink>
      <StNavLink to={`/${username}/with_replies`}>
Tweets & replies
      </StNavLink>
      <StNavLink to={`/${username}/media`}>
Media
      </StNavLink>
    </NavWrapper>
  );
}
export const TweetsNavRoute = withRouter(TweetsNav);

function Images({ images }) {
  const imagescomp = images.map(image => <Image key={image.id} src={image.url} />);
  return (
    <ImageWrapper count={images.length}>
      {imagescomp}
    </ImageWrapper>
  );
}

function Tweet({ tweet }) {
  console.log(tweet.media_attachments);
  return (
    <MainWrapper>
      {tweet.pinned && (
        <Pinned>
          <PinnedIcon src={pinned} alt="pinned" />
          <PinnedLabel>
Pinned Tweet
          </PinnedLabel>
        </Pinned>
      )}
      <ContentWrapper>
        <Header>
          <TweetAvatar src={tweet.account.avatar} />
          <ProfileFullName>
            {tweet.account.display_name}
          </ProfileFullName>
          <span>
&nbsp;
          </span>
          <ProfileUserName>
            {tweet.account.username}
          </ProfileUserName>
        </Header>
        <Caption small={tweet.media_attachments.length || tweet.content.length > 50}>
          {Parser(tweet.content)}
        </Caption>
        {tweet.media_attachments && <Images images={tweet.media_attachments} />}
        {/* {tweet.link && (
          <OGLinkPreview href={tweet.link.url}>
            <OGLinkImage src={tweet.link.image} alt={tweet.link.title} />
            <div>
              <OGLinkTitle>
                {tweet.link.title}
              </OGLinkTitle>
              <OGLinkDescription>
                {tweet.link.description}
              </OGLinkDescription>
              <OGLinkURL>
                {tweet.link.url}
              </OGLinkURL>
            </div>
          </OGLinkPreview>
        )} */}

        <ActionWrapper>
          <ActionBlock to={`${tweet.id}/reply`}>
            <ActionIcon src={replies} />
          </ActionBlock>
          <ActionBlock to={`${tweet.id}/retweet`}>
            <ActionIcon src={retweets} />
            <ActionCount>
              {tweet.reblogs_count}
            </ActionCount>
          </ActionBlock>
          <ActionBlock to={`${tweet.id}/like`}>
            {tweet.favourited ? <ActionIcon src={likesFilled} /> : <ActionIcon src={likes} />}
            <ActionCount liked={tweet.favourited}>
              {tweet.favourites_count}
            </ActionCount>
          </ActionBlock>
          <ActionBlock to={`${tweet.id}/send`}>
            <ActionIcon src={direct} />
          </ActionBlock>
        </ActionWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

class TweetsFeed extends React.Component {
  state = {
    tweets: [],
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    console.log(this.props);
    const url = `https://twitter-demo.erodionov.ru/api/v1/accounts/${id}/statuses?access_token=${
      process.env.REACT_APP_ACCESS_TOKEN
    }`;

    fetch(url)
      .then(response => response.json())
      .then(responseAsJson => this.setState({ tweets: responseAsJson }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { tweets } = this.state;
    const tweetsfeed = tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />);
    return tweetsfeed;
  }
}

export default withRouter(TweetsFeed);
