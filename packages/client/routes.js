import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import App from './App';
import AuthenticatedRoute from './App/components/AuthenticatedRoute';
import UnAuthenticatedRoute from './App/components/UnAuthenticatedRoute';
import shellRoutes from './App/Shell/routes';
import exteriorRoutes from './App/Exterior/routes';

const routes = [...shellRoutes, ...exteriorRoutes];

export default ({ history }) => (
  <Router history={history}>
    <App>
      <Switch>
        {routes.map((route, index) =>
          route.authRequired ? (
            <AuthenticatedRoute exact={true} key={index} {...route} />
          ) : (
            <UnAuthenticatedRoute exact={true} key={index} {...route} />
          )
        )}
        <Redirect to={'/'} from={'*'} />
      </Switch>
    </App>
  </Router>
);
