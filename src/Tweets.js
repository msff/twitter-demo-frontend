// @flow

// Dep import
import React from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { format, differenceInHours, differenceInMinutes } from 'date-fns';

// Types import
import type { Match } from 'react-router-dom';
import type { TweetT } from './shared/types';


// Assets import
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

const TweetAvatar = styled.div`
  position: absolute;
  margin-left: -60px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-position: center center;
`;

const Title = styled.span`
  color: #292f33;
  font-size: 15px;
  font-weight: 500;
`;

const TitleInfo = styled.span`
  color: #707e88;
  font-size: 13px;
  font-weight: 500;
`;

const CaptionWrapper = styled.div`
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
  p {
    margin: 0;
    padding: 0;
    a {
      color: #1da1f2;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
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

function TweetsNav({ match }) {
  return (
    <NavWrapper>
      <StNavLink exact to={`/${match.params.id}/`}>
        Tweets
      </StNavLink>
      <StNavLink to={`/${match.params.id}/with_replies`}>
Tweets & replies
      </StNavLink>
      <StNavLink to={`/${match.params.id}/media`}>
Media
      </StNavLink>
    </NavWrapper>
  );
}
export const TweetsNavRoute = withRouter(TweetsNav);

function SmartDate({ date }) {
  const tweetdate = new Date(date);
  console.log(tweetdate);
  function hoursminutes(short) {
    return differenceInHours(Date.now(), short) < 1
      ? `${differenceInMinutes(Date.now(), short)}m`
      : `${differenceInHours(Date.now(), short)}h`;
  }
  const distance = differenceInHours(Date.now(), tweetdate) < 24
    ? hoursminutes(tweetdate)
    : format(tweetdate, 'MMM D');
  return distance;
}

function Images({ images }) {
  const imagescomp = images.map(image => <Image key={image.id} src={image.url} />);
  return (
    <ImageWrapper count={images.length}>
      {imagescomp}
    </ImageWrapper>
  );
}

function Tweet({ tweet }) {
  const caption = { __html: tweet.content };
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
          <Title>
            {tweet.account.display_name}
            &nbsp;
          </Title>
          <TitleInfo>
            @
            {tweet.account.username}
            &nbsp;•&nbsp;
            <SmartDate date={tweet.created_at} />
          </TitleInfo>
        </Header>
        <CaptionWrapper
          small={tweet.media_attachments.length || tweet.content.length > 50}
          dangerouslySetInnerHTML={caption}
        />
        {tweet.media_attachments && <Images images={tweet.media_attachments} />}
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

// Local types definition

type Props = {
  match: Match,
};
type State = {
  tweets: TweetT[],
};

// Components

class TweetsFeed extends React.Component<Props, State> {
  state = {
    tweets: [],
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const env = process.env || {};
    const secretKey = env.REACT_APP_ACCESS_TOKEN;
    if (!secretKey) throw new Error('missing REACT_APP_ACCESS_TOKEN');
    const url = `https://twitter-demo.erodionov.ru/api/v1/accounts/${id}/statuses?access_token=${secretKey}`;

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
