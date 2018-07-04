// Shared components import
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

// Owned components import
import Stats from './Stats';
import ProfileInfo from './ProfileInfo';
import TweetsFeed, { TweetsNavRoute } from './Tweets';
import Trends from './Trends';
import WhoToFollow from './WhoToFollow';
import ShowUrl from './EmptyLink';

// Data import
import {
  tweets, whotofollow, trends, followersyouknow, userphotos,
} from './data';

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
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-position: center center;
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.username = props.match.params.username;
  }

  state = {
    profile: {},
  };

  componentDidMount() {
    const url = `https://twitter-demo.erodionov.ru/api/v1/accounts/1?access_token=${
      process.env.REACT_APP_ACCESS_TOKEN
    }`;
    
    fetch(url)
      .then(response => response.json())
      .then(responseAsJson => this.setState({ profile: responseAsJson }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.profile.display_name);
    return (
      <div>
        <Helmet>
          <title>
            {this.username}
            {' '}
— Twitter
          </title>
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <BigAvatar src={`${process.env.PUBLIC_URL}/img/ei-avatar-large.png`} />
            </div>
          </div>
        </div>
        <StHeaderImage src={`${process.env.PUBLIC_URL}/img/ei-cover.jpg`} alt="everyinteract" />

        <Stats />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 start-lg">
              <ProfileInfo
                profileinfo={this.state.profile}
                followers={followersyouknow}
                userphotos={userphotos}
              />
            </div>
            <div className="col-lg-6 start-lg">
              <Switch>
                <Route
                  exact
                  path="/:username/"
                  render={() => (
                    <React.Fragment>
                      <TweetsNavRoute username={this.username} />
                      <TweetsFeed tweets={tweets} />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/:username/with_replies"
                  render={() => (
                    <React.Fragment>
                      <TweetsNavRoute username={this.username} />
                      <ShowUrl />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/:username/media"
                  render={() => (
                    <React.Fragment>
                      <TweetsNavRoute username={this.username} />
                      <ShowUrl />
                    </React.Fragment>
                  )}
                />
                <Route path="/:username" component={ShowUrl} />
              </Switch>
            </div>
            <div className="col-lg-3">
              <Trends trends={trends} />
              <WhoToFollow whotofollow={whotofollow} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
