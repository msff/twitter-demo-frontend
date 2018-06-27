import styled from "styled-components";
import { Link } from "react-router-dom";

//Column wrappers and header

export const BgSectionWrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 2px;
  padding: 14px 16px 14px 16px;
  background-color: #fff;
`;

export const BgSectionHeaderWrapper = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 400;
  box-sizing: border-box;

  color: #979797;
`;

export const SectionHeader = styled.h3`
  margin: 0;
  color: #14171a;
  font-size: 17px;
  font-weight: 500;
  display: inline;
`;

export const SectionLink = styled(Link)`
  color: #1da1f2;
  text-overflow: ellipsis;
  text-decoration: none;
  display: inline;

  &:hover {
    text-decoration: underline;
  }
`;

// Followers and Photos shared components

export const SectionSubheader = styled(Link)`
  margin-top: 18px;
  margin-bottom: 5.5px;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #1da1f2;

  text-decoration: none;

  display: block;
`;

export const SectionFlexWrapper = styled.div`
  width: 100%;
  margin-left: -2.5px;
  margin-right: -2.5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-bottom: 13px;
`;
