import React from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import { Link, withRouter } from 'react-router-dom';

import verified from './icons/verified.png';
import iconJoined from './icons/icon-joined.svg';
import iconLink from './icons/icon-link.svg';
import iconLocation from './icons/icon-location.svg';
import iconFollowers from './icons/icon-followers.svg';
import iconPhotos from './icons/icon-photos.svg';

import { SectionSubheader, SectionFlexWrapper } from './Shared';

const SectionWrapper = styled.div`
  margin-top: 40px;
  padding-right: 12px;
`;

const FullName = styled.h1`
  color: #14171a;
  font-size: 22px;
  font-weight: 500;
  display: inline;
  margin: 0px;
`;

const Username = styled.h2`
  color: #697787;
  font-size: 14px;
  line-spacing: 0.01px;
  line-height: 21px;
  font-weight: 400;
  margin: 0;
  display: inline;
`;

const IsVerified = styled.img`
  height: 18px;
  width: 18px;
  vertical-align: middle;
  display: inline;
`;

const Follows = styled.span`
  margin-left: 7.5px;

  color: #697787;
  font-size: 12px;
  line-spacing: 0.01px;
  font-weight: normal;
`;

const Bio = styled.div`
  margin-top: 13px;
  margin-bottom: 13px;
  padding-right: 15px;
  font-size: 14px;
  line-height: 20px;
  font-color: #14171a;
  font-weight: 400;
`;

const UserInfoIcon = styled.img`
  display: inline;
  vertical-align: middle;
  max-width: 15px;
  max-height: 15px;
  margin-right: 5px;
`;

const UserInfoLink = styled.a`
  display: inline;

  text-decoration: none;
  font-weight: 400;
  line-height: 28px;
  font-size: 14px;
  color: #0072bb;
`;

const UserInfoSmall = styled.p`
  display: inline;

  line-height: 28px;
  font-weight: 400;
  font-size: 14px;
  color: #647787;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ProfileButton = styled.button`
  width: 128px;
  background-color: #1da1f2;
  border-style: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin: 12px 2.5px 0 2.5px;
  height: 40px;
`;

// Followers you know section

const FollowerAvatar = styled.img`
  margin: 2.5px 2.5px 2.5px 2.5px;
  width: 48px;
  height: 48px;
`;

function FollowerYouKnowSingle({ follower }) {
  const avatarurl = `${process.env.PUBLIC_URL}${follower.avatar}`;
  return (
    <Link to={follower.username}>
      <FollowerAvatar src={avatarurl} alt={follower.user} />
    </Link>
  );
}

function FollowersYouKnow(props) {
  const followers = props.followers.map(follower => (
    <FollowerYouKnowSingle key={follower.username} follower={follower} />
  ));
  return followers;
}

// Photos section

const PhotoPreview = styled.img`
  margin: 2.5px 2.5px 2.5px 2.5px;
  width: 83px;
  height: 83px;
`;

function PhotoSingle({ photo }) {
  const url = `${process.env.PUBLIC_URL}${photo.src}`;
  return (
    <Link to={url}>
      <PhotoPreview src={url} alt={photo.caption} />
    </Link>
  );
}

function Photos({ userphotos }) {
  const photos = userphotos.map(photo => <PhotoSingle key={photo.caption} photo={photo} />);
  return photos;
}

const cleanHTML = {
  replace: ({ children }) => children,
};

function ProfileInfo({
  match, profile, followers, userphotos,
}) {
  return (
    <div>
      <SectionWrapper>
        <div>
          <FullName>
            {profile.display_name}
          </FullName>
          <span>
&nbsp;
          </span>
          <IsVerified src={verified} alt="verified" />
        </div>
        <div>
          <Username>
            @
            {profile.username}
          </Username>
          <Follows>
Follows you
          </Follows>
        </div>
        <Bio>
          {profile.note && Parser(profile.note)}
        </Bio>
        <div>
          <UserInfoIcon src={iconLocation} />
          <UserInfoSmall>
London, UK
          </UserInfoSmall>
        </div>
        <div>
          <UserInfoIcon src={iconLink} />
          <UserInfoLink>
everyinteraction.com
          </UserInfoLink>
        </div>
        <div>
          <UserInfoIcon src={iconJoined} />
          <UserInfoSmall>
Joined May 2008
          </UserInfoSmall>
        </div>
        <ButtonWrapper>
          <ProfileButton>
Tweet to
          </ProfileButton>
          <ProfileButton>
Message
          </ProfileButton>
        </ButtonWrapper>
      </SectionWrapper>

      <SectionSubheader to="">
        <UserInfoIcon src={iconFollowers} />
        6 Followers you know
      </SectionSubheader>
      <SectionFlexWrapper>
        <FollowersYouKnow followers={followers} />
      </SectionFlexWrapper>
      <SectionSubheader to="">
        <UserInfoIcon src={iconPhotos} />
        522 Photos and videos
      </SectionSubheader>
      <SectionFlexWrapper>
        <Photos userphotos={userphotos} />
      </SectionFlexWrapper>
    </div>
  );
}

export default withRouter(ProfileInfo);
