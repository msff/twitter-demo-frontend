import React from "react";
import styled, { extend } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import iconDelete from "./icons/icon-delete.svg";

// Right Section

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

const whotofollow1 = {
  avatar: "/img/whotofollow/appleinsider.png",
  user: "Apple Insider",
  username: "appleinsider"
};
const whotofollow2 = {
  avatar: "/img/whotofollow/creode.png",
  user: "Creode",
  username: "Creode"
};
const whotofollow3 = {
  avatar: "/img/whotofollow/epiphany.png",
  user: "Epiphany Search",
  username: "epiphanysearch"
};

function WTFItem(props) {
  const avatarurl = `${process.env.PUBLIC_URL}${props.profile.avatar}`;
  return (
    <WhoToFollowItemBlock>
      <WhoToFollowItemAvatar src={avatarurl} alt="avatar" />
      <WhoToFollowItemContent>
        <WhoToFollowProfileLink to={props.profile.username}>
          <WhoToFollowItemUser>{props.profile.user}</WhoToFollowItemUser>
          <small>&nbsp;</small>
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

export default function RightSection(props) {
  return (
    <div>
      <ColumnWrapper>
        <ColumnSectionTopWrapper>
          <ColumnSectionHeader>Who to follow</ColumnSectionHeader>
          <small> · </small>
          <ColumnSectionLink to="refresh">Refresh</ColumnSectionLink>
          <small> · </small>
          <ColumnSectionLink to="viewall">View all</ColumnSectionLink>
        </ColumnSectionTopWrapper>
        <WTFItem profile={whotofollow1} />
        <WTFItem profile={whotofollow2} />
        <WTFItem profile={whotofollow3} />
      </ColumnWrapper>
      <ColumnWrapper>
        <ColumnSectionTopWrapper>
          <ColumnSectionHeader>United Kingdom Trends</ColumnSectionHeader>
        </ColumnSectionTopWrapper>
      </ColumnWrapper>
    </div>
  );
}
