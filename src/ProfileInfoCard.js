import React, { Component } from "react";
import "normalize.css";
import styled from "styled-components";
import "flexboxgrid2";
import locationicon from "./icons/Icon_ Location.svg";
import linkicon from "./icons/Icon_ Link.svg";
import joinedicon from "./icons/icon_ joined.svg";

const ProfileInfoCard = styled.div`
  margin-top: 40px;
`;

const ProfileName = styled.h1`
  color: #14171a;
  font-size: 22px;
  line-spacing: 0.02px;
  font-weight: bold;
  line-height: 1.5;
  vertical-align: middle;
  display: inline;
`;

const UserName = styled.h2`
  color: #697787;
  font-size: 14px;
  line-spacing: 0.01px;
  line-height: 21px;
  font-weight: normal;
  margin: 0;
  display: inline;
`;

const FollowsYou = styled.span`
  color: #697787;
  font-size: 12px;
  line-spacing: 0.01px;
  line-height: 21px;
  font-weight: normal;
  display: inline;
  margin-left: 7.5px;
`;

const Tick = styled.img`
  max-height: 18px;
  max-width: 18px;
  vertical-align: middle;
  display: inline;
`;
const UserNameBio = styled.p`
  font-family: HelveticaNeue;
  line-height: 21px;
  font-size: 14px;
  font-color: #14171a;
  font-weight: normal;
`;
const UserInfoIcon = styled.img`
  color: #d8d8d8;
  vertical-align: middle;
  max-width: 13px;
  max-height: 14px;
  margin-right: 5px;
`;

const UserInfoLink = styled.a`
  text-decoration: none;
  font-family: HelveticaNeue;
  line-height: 28px;
  font-size: 14px;
  color: #0072bb;
`;

const UserInfoSecondary = styled.span`
  text-decoration: none;
  font-family: HelveticaNeue;
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const ButtonSection = styled.div`
  margin-top: 10px;
  display: flex;
  height: 39px;
  align-items: stretch;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #1da1f2;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 100px;
  line-spacing: 0.01px;
  line-height: 18px;
  border-width: 0px;
  width: 48%;
`;

function ProfileInfoCardleft(props) {
  return (
    <div className={props.className}>
      <ProfileInfoCard>
        <ProfileName>Every Interact</ProfileName>
        <span>
          <Tick
            src={process.env.PUBLIC_URL + "pics/Tick.jpg"}
            alt="pics/Tick.jpg"
          />
        </span>
        <br />
        <UserName>@Every Interact</UserName>
        <FollowsYou>Follows You </FollowsYou>
        <UserNameBio>
          UX Design studio focussed problem solving creativity. Design to us is
          how can we make things *work* amazing.
        </UserNameBio>
        <div>
          <UserInfoIcon src={locationicon} />
          <UserInfoSecondary>London, UK</UserInfoSecondary>
          <br />
          <UserInfoIcon src={linkicon} />
          <UserInfoLink>everyinteraction.com</UserInfoLink>
          <br />
          <UserInfoIcon src={joinedicon} />
          <UserInfoSecondary>Joined May 2008</UserInfoSecondary>
        </div>
        <ButtonSection>
          <Button>Tweet to</Button>
          <Button>Message</Button>
        </ButtonSection>
      </ProfileInfoCard>
    </div>
  );
}

export default ProfileInfoCardleft;
