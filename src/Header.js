// @flow

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from './icons/icon-twitter-logo.svg';
import iconHome from './icons/icon-home.svg';
import iconMoments from './icons/icon-moments.svg';
import iconMessages from './icons/icon-messages.svg';
import iconNotifications from './icons/icon-notifications.svg';
import iconMagnifier from './icons/icon-magnifier.svg';

import { ActionButton } from './shared/Shared';

const Background = styled.div`
  background-color: #ffffff;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const StNavLink = styled(NavLink)`
  padding-top: 6px;
  padding-bottom: 6px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-content: center;
  text-decoration: none;
  cursor: pointer;
`;

const Icon = styled.img`
  max-height: 18px;
  max-width: 18px;
  margin-right: 8px;
`;
const Label = styled.span`
  font-weight: bold;
  font-size: 13px;
  color: #667580;
`;

const SearchInput = styled.input`
  border-radius: 100px;
  border-color: #e6ecf0;
  border-style: solid;
  border-width: 1px;
  background-image: url(${iconMagnifier});
  background-repeat: no-repeat;
  background-position: center right 12px;
  background-size: 15px 15px;
  background-color: #f5f8fa;
  line-height: 14px;
  font-size: 12px;
  padding-left: 11px;
  padding-top: 9px;
  padding-bottom: 9px;
  width: 220px;
`;

const Logo = styled.img`
  width: 20px;
  padding-top: 4px;
`;

const Avatar = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  width: 26px;
  height: 26px;
  display: flex;
`;

const AvatarWrapper = styled(NavLink)`
  display: flex;
  align-content: center;
  align-items: center;
`;

function Navigation() {
  return (
    <Wrapper>
      <StNavLink to="/">
        <Icon src={iconHome} alt="Home" />
        <Label>
Home
        </Label>
      </StNavLink>
      <StNavLink to="/moments">
        <Icon src={iconMoments} alt="Moments" />
        <Label>
Moments
        </Label>
      </StNavLink>
      <StNavLink to="/notifications">
        <Icon src={iconNotifications} alt="Notifications" />
        <Label>
Notifications
        </Label>
      </StNavLink>
      <StNavLink to="/messages">
        <Icon src={iconMessages} alt="Messages" />
        <Label>
Messages
        </Label>
      </StNavLink>
    </Wrapper>
  );
}

function Header() {
  const publicurl = process.env.PUBLIC_URL || '';
  return (
    <Background>
      <div className="container">
        <div className="row between-lg middle-lg">
          <Navigation />
          <Wrapper>
            <Logo src={logo} alt="logo" />
          </Wrapper>
          <Wrapper>
            <SearchInput placeholder="Search Twitter" />
            <AvatarWrapper to="/">
              <Avatar src={`${publicurl}/img/ei-avatar-small.jpg`} />
            </AvatarWrapper>
            <NavLink to="/newtweet">
              <ActionButton>
Tweet
              </ActionButton>
            </NavLink>
          </Wrapper>
        </div>
      </div>
    </Background>
  );
}

export default Header;
