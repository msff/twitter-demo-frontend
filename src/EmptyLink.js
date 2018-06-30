import React from 'react';
import { withRouter } from 'react-router-dom';

function ShowUrl({ location }) {
  return (
    <h1>
      This is&nbsp;
      {location.pathname}
    </h1>
  );
}

export default withRouter(ShowUrl);
