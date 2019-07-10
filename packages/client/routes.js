import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import App from './App';
import Home from './App/Shell/Home';
import Shell from './App/Shell';
import Exterior from './App/Exterior';
import Login from './App/Exterior/Login';
import Register from './App/Exterior/Register';

export default ({ history }) => (
  <Router history={history}>
    <App>
      <Switch>
        <Shell>
          <Route path="/" exact component={Home}/>
        </Shell>
        <Exterior>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
        </Exterior>
        <Redirect to={'/'} from={'*'}/>
      </Switch>
    </App>
  </Router>
);
