import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  BgSectionWrapper, BgSectionHeaderWrapper, SectionHeader, SectionLink,
} from './Shared';

import iconDelete from './icons/icon-delete.svg';
import verified from './icons/verified.png';
import morePeople from './icons/icon-people.svg';

// Who To Follow specific components

const SingleUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e6ecf0;
  margin-top: 11px;
`;

const UserContent = styled.div`
  margin-right: 14px;
  padding-bottom: 16px;
  line-height: 1;
  max-width: 170px;
  flex-grow: 1;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: #000;
  display: flex;
  flex-direction: row;
`;

const UserFullname = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-top: 0;
  display: block;
`;

const IsVerified = styled.img`
  height: 16px;
  width: 16px;
  display: inline-block;
`;

const UserUsername = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: #657786;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
`;

const ItemAvatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  flex-shrink: 0;
`;

const FollowButton = styled.button`
  width: 89px;
  height: 29px;

  border-style: none;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;

  background-color: #fff;
  color: #1da1f2;
  border: 1px solid #1da1f2;
  margin-top: 9px;
`;

const DeleteIcon = styled.img`
  width: 8px;
  height: 8px;
`;

const MorePeopleLink = styled(Link)`
  margin-top: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #1da1f2;
  font-size: 13px;
  font-weight: 400;
  display: block;
`;

const MorePeopleIcon = styled.img`
  width: 16px;
  height: 12px;
  display: inline;
  vertical-align: middle;
  margin-right: 6px;
`;

function WTFItem({ profile }) {
  const avatarurl = `${process.env.PUBLIC_URL}${profile.avatar}`;
  return (
    <SingleUser>
      <ItemAvatar src={avatarurl} alt="avatar" />
      <UserContent>
        <ProfileLink to={`/${profile.username}`}>
          <UserFullname>
            {profile.user}
          </UserFullname>
          <small>
&nbsp;
          </small>
          {profile.verified && (
            <span>
              <IsVerified src={verified} />
              <small>
&nbsp;
              </small>
            </span>
          )}
          <UserUsername>
            @
            {profile.username}
          </UserUsername>
        </ProfileLink>
        <FollowButton>
Follow
        </FollowButton>
      </UserContent>
      <DeleteIcon src={iconDelete} />
    </SingleUser>
  );
}

export function WTFItems(props) {
  const wtfitems = props.whotofollowitems.map(profile => (
    <WTFItem key={profile.username} profile={profile} />
  ));
  return wtfitems;
}

export default function WhoToFollow({ whotofollow }) {
  return (
    <div>
      <BgSectionWrapper>
        <BgSectionHeaderWrapper>
          <SectionHeader>
Who to follow
          </SectionHeader>
          <small>
&nbsp;&nbsp;·&nbsp;&nbsp;
          </small>
          <SectionLink to="refresh">
Refresh
          </SectionLink>
          <small>
&nbsp;&nbsp;·&nbsp;&nbsp;
          </small>
          <SectionLink to="viewall">
View all
          </SectionLink>
        </BgSectionHeaderWrapper>
        <WTFItems whotofollowitems={whotofollow} />
        <MorePeopleLink to="more">
          <MorePeopleIcon src={morePeople} />
          Find people you know
        </MorePeopleLink>
      </BgSectionWrapper>
    </div>
  );
}
