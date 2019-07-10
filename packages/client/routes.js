import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import App from './App';
import Home from './App/Shell/Home';
import Exterior from './App/Exterior';
import Login from './App/Exterior/Login';
import Register from './App/Exterior/Register';
import NotFound from './App/Exterior/NotFound';

export default ({ history }) => (
  <Router history={history}>
    <App>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Exterior>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route component={NotFound}/>
        </Exterior>
      </Switch>
    </App>
  </Router>
);
