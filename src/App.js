import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Profile from './Profile';
import Header from './Header';
import ShowUrl from './EmptyLink';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>
Every Interactive — Twitter
          </title>
        </Helmet>
        <Switch>
          <Redirect exact from="/" to="/EveryInteract" />
        </Switch>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/moments" component={ShowUrl} />
            <Route path="/notifications" component={ShowUrl} />
            <Route path="/messages" component={ShowUrl} />
            <Route path="/:username" component={Profile} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
