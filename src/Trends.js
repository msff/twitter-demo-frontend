import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  BgSectionWrapper,
  BgSectionHeaderWrapper,
  SectionHeader,
  SectionLink,
} from './Shared';

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

function TrendSingle(props) {
  return (
    <TrendBlock>
      <TrendBlockHeader to={`/${props.trend.header}`}>
        {props.trend.header}
      </TrendBlockHeader>
      {props.trend.tweets && (
        <TrendBlockCaption>
          {`${props.trend.tweets} Tweets`}
        </TrendBlockCaption>
      )}
      {props.trend.caption && (
        <TrendBlockCaption>
          {props.trend.caption}
        </TrendBlockCaption>
      )}
    </TrendBlock>
  );
}

function TrendsList(props) {
  const trenditems = props.trends.map((trend, index) => (
    <TrendSingle key={index} trend={trend} />
  ));
  return trenditems;
}

export default function Trends(props) {
  return (
    <div>
      <BgSectionWrapper>
        <BgSectionHeaderWrapper>
          <SectionHeader>
United Kingdom Trends
          </SectionHeader>
          <small>
&nbsp;&nbsp;·&nbsp;&nbsp;
          </small>
          <SectionLink to="trendschange">
Change
          </SectionLink>
        </BgSectionHeaderWrapper>
        <TrendsList trends={props.trends} />
      </BgSectionWrapper>
    </div>
  );
}
