import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Profile from './Profile';
import Header from './Header';

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
          <Route path="/EveryInteract" component={Profile} />
          <Route path="/home" component={Profile} />
          <Route path="/moments" component={Profile} />
          <Route path="/notifications" component={Profile} />
          <Route path="/messages" component={Profile} />
        </main>
      </div>
    </Router>
  );
}

export default App;
