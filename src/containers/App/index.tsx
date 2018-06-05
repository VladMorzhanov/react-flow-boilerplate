import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Router, Switch} from 'react-router';
import {Main} from "../Main";

// render react DOM
export const App = hot(module)(({ history }) => (
  <div className="container">
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </div>
));
