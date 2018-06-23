import React from "react";
import styled, { extend } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import iconDelete from "./icons/icon-delete.svg";
import verified from "./icons/verified.png";
import morePeople from "./icons/icon-people.svg";

// Right Section

//Column wrappers and header

const ColumnWrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 2px;
  padding: 14px 16px 14px 16px;
  background-color: #fff;
`;

const ColumnSectionTopWrapper = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 400;
  box-sizing: border-box;

  color: #979797;
`;

const ColumnSectionHeader = styled.h3`
  margin: 0;
  color: #14171a;
  font-size: 17px;
  font-weight: 500;
  display: inline;
`;

const ColumnSectionLink = styled(Link)`
  color: #1da1f2;
  text-overflow: ellipsis;
  text-decoration: none;
  display: inline;

  &:hover {
    text-decoration: underline;
  }
`;

// Who To Follow specefic components

const WhoToFollowItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e6ecf0;
  margin-top: 11px;
`;

const WhoToFollowItemContent = styled.div`
  margin-right: 14px;
  padding-bottom: 16px;
  line-height: 1;
  max-width: 170px;
  flex-grow: 1;
`;

const WhoToFollowProfileLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: #000;
  display: flex;
  flex-direction: row;
`;

const WhoToFollowItemUser = styled.span`
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

const WhoToFollowItemUsername = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: #657786;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
`;

const WhoToFollowItemAvatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  flex-shrink: 0;
`;

const WhoToFollowButton = styled.button`
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

// Trends specific components

const TrendBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TrendBlockHeader = styled(Link)`
  font-weight: 500;
  line-height: 20px;
  font-size: 15px;
  color: #1da1f2;
  text-decoration: none;
`;

const TrendBlockCaption = styled.div`
  font-weight: 300;
  line-height: 20px;
  font-size: 12px;
  color: #657786;
`;

// Who To Follow data objects

const whotofollow1 = {
  avatar: "/img/whotofollow/appleinsider.png",
  user: "Apple Insider",
  username: "appleinsider",
  verified: false
};
const whotofollow2 = {
  avatar: "/img/whotofollow/creode.png",
  user: "Creode",
  username: "Creode",
  verified: true
};
const whotofollow3 = {
  avatar: "/img/whotofollow/epiphany.png",
  user: "Epiphany Search",
  username: "epiphanysearch",
  verified: false
};

// Trends data objects

const trend1 = {
  header: "#BringYourDogToWorkDay",
  tweets: "",
  caption: ""
};
const trend2 = {
  header: "#FridayFeeling",
  tweets: "12.1K",
  caption: ""
};
const trend3 = {
  header: "#BrexitAnniversary",
  tweets: "",
  caption: "It’s one year since the UK voted to leave the European Union"
};

function WTFItem(props) {
  const avatarurl = `${process.env.PUBLIC_URL}${props.profile.avatar}`;
  return (
    <WhoToFollowItemBlock>
      <WhoToFollowItemAvatar src={avatarurl} alt="avatar" />
      <WhoToFollowItemContent>
        <WhoToFollowProfileLink to={"/" + props.profile.username}>
          <WhoToFollowItemUser>{props.profile.user}</WhoToFollowItemUser>
          <small>&nbsp;</small>
          {props.profile.verified && (
            <span>
              <IsVerified src={verified} />
              <small>&nbsp;</small>
            </span>
          )}
          <WhoToFollowItemUsername>
            @{props.profile.username}
          </WhoToFollowItemUsername>
        </WhoToFollowProfileLink>
        <WhoToFollowButton>Follow</WhoToFollowButton>
      </WhoToFollowItemContent>
      <DeleteIcon src={iconDelete} />
    </WhoToFollowItemBlock>
  );
}

function TrendItem(props) {
  return (
    <TrendBlock>
      <TrendBlockHeader to={"/" + props.trend.header}>
        {props.trend.header}
      </TrendBlockHeader>
      {props.trend.tweets && (
        <TrendBlockCaption>{props.trend.tweets + " Tweets"}</TrendBlockCaption>
      )}
      {props.trend.caption && (
        <TrendBlockCaption>{props.trend.caption}</TrendBlockCaption>
      )}
    </TrendBlock>
  );
}

export default function RightSection(props) {
  return (
    <div>
      <ColumnWrapper>
        <ColumnSectionTopWrapper>
          <ColumnSectionHeader>Who to follow</ColumnSectionHeader>
          <small>&nbsp;&nbsp;·&nbsp;&nbsp;</small>
          <ColumnSectionLink to="refresh">Refresh</ColumnSectionLink>
          <small>&nbsp;&nbsp;·&nbsp;&nbsp;</small>
          <ColumnSectionLink to="viewall">View all</ColumnSectionLink>
        </ColumnSectionTopWrapper>
        <WTFItem profile={whotofollow1} />
        <WTFItem profile={whotofollow2} />
        <WTFItem profile={whotofollow3} />
        <MorePeopleLink to="more">
          <MorePeopleIcon src={morePeople} />
          Find people you know
        </MorePeopleLink>
      </ColumnWrapper>
      <ColumnWrapper>
        <ColumnSectionTopWrapper>
          <ColumnSectionHeader>United Kingdom Trends</ColumnSectionHeader>
          <small>&nbsp;&nbsp;·&nbsp;&nbsp;</small>
          <ColumnSectionLink to="trendschange">Change</ColumnSectionLink>
        </ColumnSectionTopWrapper>
        <TrendItem trend={trend1} />
        <TrendItem trend={trend2} />
        <TrendItem trend={trend3} />
      </ColumnWrapper>
    </div>
  );
}
