import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  BgSectionWrapper, BgSectionHeaderWrapper, SectionHeader, SectionLink,
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

function TrendSingle({ trend }) {
  return (
    <TrendBlock>
      <TrendBlockHeader to={`/${trend.header}`}>
        {trend.header}
      </TrendBlockHeader>
      {trend.tweets && (
      <TrendBlockCaption>
        {`${trend.tweets} Tweets`}
      </TrendBlockCaption>
      )}
      {trend.caption && (
      <TrendBlockCaption>
        {trend.caption}
      </TrendBlockCaption>
      )}
    </TrendBlock>
  );
}

function TrendsList(props) {
  const trenditems = props.trends.map(trend => <TrendSingle key={trend.id} trend={trend} />);
  return trenditems;
}

export default function Trends({ trends }) {
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
        <TrendsList trends={trends} />
      </BgSectionWrapper>
    </div>
  );
}
