import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import LayoutWrappedRoute from './App/components/LayoutWrappedRoute';
import App from './App';
import Home from './App/Shell/Home';
import Shell from './App/Shell';
import Exterior from './App/Exterior';
import Login from './App/Exterior/Login';
import Register from './App/Exterior/Register';
import Course from './App/Shell/Course';

export default ({ history }) => (
  <Router history={history}>
    <App>
      <Switch>
        <LayoutWrappedRoute exact path={'/'} layout={Shell} component={Home} />
        <LayoutWrappedRoute exact path={'/course/:id'} layout={Shell} component={Course} />
        <LayoutWrappedRoute exact path={'/register'} layout={Exterior} component={Register} />
        <LayoutWrappedRoute exact path={'/login'} layout={Exterior} component={Login} />
        <Redirect to={'/'} from={'*'} />
      </Switch>
    </App>
  </Router>
);
