import React from "react";
import styled from "styled-components";
// eslint-disable-next-line

import "normalize.css";
import "flexboxgrid2";

import verified from "./icons/verified.png";
import iconjoined from "./icons/icon-joined.svg";
import iconlink from "./icons/icon-link.svg";
import iconlocation from "./icons/icon-location.svg";

const LeftSectionWrapper = styled.div`
  margin-top: 40px;
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
  align-items: stretch;
  justify-content: space-between;
`;

const ProfileButton = styled.button`
  width: 49%;
  background-color: #1da1f2;
  border-style: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 12px;
  height: 40px;
`;

function LeftSection(props) {
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
          <UserInfoIcon src={iconlocation} />
          <UserInfoSmall>London, UK</UserInfoSmall>
          <br />
          <UserInfoIcon src={iconlink} />
          <UserInfoLink>everyinteraction.com</UserInfoLink>
          <br />
          <UserInfoIcon src={iconjoined} />
          <UserInfoSmall>Joined May 2008</UserInfoSmall>
        </div>
        <ButtonWrapper>
          <ProfileButton>Tweet to</ProfileButton>
          <ProfileButton>Message</ProfileButton>
        </ButtonWrapper>
      </LeftSectionWrapper>
    </div>
  );
}

export default LeftSection;
