import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "normalize.css";
import "flexboxgrid2";

import verified from "./icons/verified.png";
import iconJoined from "./icons/icon-joined.svg";
import iconLink from "./icons/icon-link.svg";
import iconLocation from "./icons/icon-location.svg";
import iconFollowers from "./icons/icon-followers.svg";
import iconPhotos from "./icons/icon-photos.svg";

const LeftSectionWrapper = styled.div`
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

// Followers and Photos shared components

const SectionSubheader = styled(Link)`
  margin-top: 18px;
  margin-bottom: 5.5px;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #1da1f2;

  text-decoration: none;

  display: block;
`;

const LeftSectionFlexWrapper = styled.div`
  width: 100%;
  margin-left: -2.5px;
  margin-right: -2.5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-bottom: 13px;
`;

// Followers you know section

const FollowerAvatar = styled.img`
  margin: 2.5px 2.5px 2.5px 2.5px;
  width: 48px;
  height: 48px;
`;

function FollowerYouKnowSingle(props) {
  const avatarurl = `${process.env.PUBLIC_URL}${props.follower.avatar}`;
  return (
    <Link to={props.follower.username}>
      <FollowerAvatar src={avatarurl} alt={props.follower.user} />
    </Link>
  );
}

function FollowersYouKnow(props) {
  const followers = props.followers.map((follower, index) => (
    <FollowerYouKnowSingle key={index} follower={follower} />
  ));
  return followers;
}

// Photos section

const PhotoPreview = styled.img`
  margin: 2.5px 2.5px 2.5px 2.5px;
  width: 83px;
  height: 83px;
`;

function PhotoSingle(props) {
  const url = `${process.env.PUBLIC_URL}${props.photo.src}`;
  return (
    <Link to={url}>
      <PhotoPreview src={url} alt={props.photo.caption} />
    </Link>
  );
}

function Photos(props) {
  console.log(props.userphotos);
  const photos = props.userphotos.map((photo, index) => (
    <PhotoSingle key={index} photo={photo} />
  ));
  return photos;
}

export default function LeftSection(props) {
  return (
    <div>
      <LeftSectionWrapper>
        <FullName>Every Interact</FullName>
        <span>&nbsp;</span>
        <IsVerified src={verified} alt="verified" />

        <br />
        <Username>@Every Interact</Username>
        <Follows>Follows you</Follows>
        <br />
        <Bio>
          UX Design studio focussed problem solving creativity. Design to us is
          how can we make things *work* amazing.
        </Bio>
        <div>
          <UserInfoIcon src={iconLocation} />
          <UserInfoSmall>London, UK</UserInfoSmall>
          <br />
          <UserInfoIcon src={iconLink} />
          <UserInfoLink>everyinteraction.com</UserInfoLink>
          <br />
          <UserInfoIcon src={iconJoined} />
          <UserInfoSmall>Joined May 2008</UserInfoSmall>
        </div>
        <ButtonWrapper>
          <ProfileButton>Tweet to</ProfileButton>
          <ProfileButton>Message</ProfileButton>
        </ButtonWrapper>
      </LeftSectionWrapper>

      <SectionSubheader to="">
        <UserInfoIcon src={iconFollowers} />6 Followers you know
      </SectionSubheader>
      <LeftSectionFlexWrapper>
        <FollowersYouKnow followers={props.followers} />
      </LeftSectionFlexWrapper>
      <SectionSubheader to="">
        <UserInfoIcon src={iconPhotos} />522 Photos and videos
      </SectionSubheader>
      <LeftSectionFlexWrapper>
        <Photos userphotos={props.userphotos} />
      </LeftSectionFlexWrapper>
    </div>
  );
}
