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
  whotofollow, trends, followersyouknow, userphotos,
} from './data';

// Header images

const StHeaderImage = styled.img`
  width: 100%;
  max-height: 380px;
  object-fit: cover;
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
  state = {
    profile: {},
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const url = `https://twitter-demo.erodionov.ru/api/v1/accounts/${id}?access_token=${
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
    const { profile } = this.state;
    console.log(profile);
    return (
      <div>
        {profile.error && (
          <h1>
            Error:&nbsp;
            {profile.error}
          </h1>
        )}
        {!profile.error && (
          <React.Fragment>
            <Helmet>
              <title>
                {`${profile.display_name} — Twitter Demo`}
              </title>
            </Helmet>
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <BigAvatar src={profile.avatar} alt={profile.username} />
                </div>
              </div>
            </div>
            <StHeaderImage src={profile.header} alt={profile.username} />

            <Stats profile={profile} />
            <div className="container">
              <div className="row">
                <div className="col-lg-3 start-lg">
                  <ProfileInfo
                    profile={profile}
                    followers={followersyouknow}
                    userphotos={userphotos}
                  />
                </div>
                <div className="col-lg-6 start-lg">
                  <Switch>
                    <Route
                      exact
                      path="/:id/"
                      render={() => (
                        <React.Fragment>
                          <TweetsNavRoute />
                          <TweetsFeed />
                        </React.Fragment>
                      )}
                    />
                    <Route
                      path="/:id/with_replies"
                      render={() => (
                        <React.Fragment>
                          <TweetsNavRoute username={this.username} />
                          <ShowUrl />
                        </React.Fragment>
                      )}
                    />
                    <Route
                      path="/:id/media"
                      render={() => (
                        <React.Fragment>
                          <TweetsNavRoute username={this.username} />
                          <ShowUrl />
                        </React.Fragment>
                      )}
                    />
                    <Route path="/:id" component={ShowUrl} />
                  </Switch>
                </div>
                <div className="col-lg-3">
                  <Trends trends={trends} />
                  <WhoToFollow whotofollow={whotofollow} />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(Profile);
