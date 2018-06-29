import React from 'react';
import { withRouter } from 'react-router-dom';

function ShowUrl({ match }) {
  return (
    <h1>
      This is&nbsp;
      {match.url}
    </h1>
  );
}

export default withRouter(ShowUrl);
