import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import App from './App';
import WrappedRoute from './App/components/WrappedRoute';
import shellRoutes from './App/Shell/routes';
import exteriorRoutes from './App/Exterior/routes';

const routes = [...shellRoutes, ...exteriorRoutes];

export default ({ history }) => (
  <Router history={history}>
    <App>
      <Switch>
        {routes.map((route, index) => (
          <WrappedRoute exact={true} key={index} {...route} />
        ))}
        <Redirect to={'/'} from={'*'} />
      </Switch>
    </App>
  </Router>
);
