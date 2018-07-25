// @flow
// Shared components import
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import type { Match } from 'react-router-dom';
import { fetchRequest, fetchSuccess, fetchError } from './redux';

// Types import
import type { Account } from './shared/types';

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

// Redux store

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

// Local types declaration

type Props = {
  match: Match,
  profile: Account,
};
type State = {
  profile: Account,
};

// Redux

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return state;
    case 'FETCH_SUCCESS':
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

function fetchProfile(id) {
  const env = process.env || {};
  const secretKey = env.REACT_APP_ACCESS_TOKEN;
  if (!secretKey) throw new Error('missing REACT_APP_ACCESS_TOKEN');
  const URL = `https://twitter-demo.erodionov.ru/api/v1/accounts/${id}?access_token=${secretKey}`;
  return fetch(URL).then(response => Promise.all([response, response.json()]));
}

function fetchWithRedux(id) {
  return (dispatch) => {
    dispatch(fetchRequest());
    return fetchProfile(id).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchSuccess(json));
      } else {
        dispatch(fetchError());
      }
    });
  };
}

const store = createStore(reducer, applyMiddleware(thunk));

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

// Profile component

class Profile extends React.Component<Props, State> {
  // props = {
  //   match: {},
  //   profile: {
  //     id: 0,
  //     username: null,
  //     acct: null,
  //     display_name: null,
  //     locked: false,
  //     bot: false,
  //     created_at: null,
  //     note: null,
  //     url: null,
  //     avatar: null,
  //     avatar_static: null,
  //     header: null,
  //     header_static: null,
  //     followers_count: 0,
  //     following_count: 0,
  //     statuses_count: 0,
  //     emojis: [],
  //     fields: [],
  //   },
  // };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    fetchWithRedux(id);
  }

  render() {
    const { profile } = this.props;
    return (
      <React.Fragment>
        {!profile && (
        <h1>
No Profile
        </h1>
        )}
        {profile && (
          <div>
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

            <Stats profile={store.profile} />
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
                          <TweetsNavRoute />
                          <ShowUrl />
                        </React.Fragment>
                      )}
                    />
                    <Route
                      path="/:id/media"
                      render={() => (
                        <React.Fragment>
                          <TweetsNavRoute />
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
          </div>
        )}
      </React.Fragment>
    );
  }
}

const ProfileWithFetch = connect(
  mapStateToProps,
  { fetchWithRedux },
)(withRouter(Profile));

function ProfileProvider() {
  return (
    <Provider store={store}>
      <ProfileWithFetch />
    </Provider>
  );
}

export default withRouter(ProfileProvider);
