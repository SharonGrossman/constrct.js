import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import App from './App';
import AuthenticatedRoute from './App/components/Routes/AuthenticatedRoute';
import UnAuthenticatedRoute from './App/components/Routes/UnAuthenticatedRoute';
import shellRoutes from './App/Shell/routes';
import exteriorRoutes from './App/Exterior/routes';
import { useHistory } from './App/Providers/HistoryProvider';

const routes = [...shellRoutes, ...exteriorRoutes];

export default () => {
  const { history } = useHistory();

  return (
    <Router history={history}>
      <App>
        <Switch>
          {routes.map(route =>
            route.authRequired ? (
              <AuthenticatedRoute exact key={route.name} {...route} />
            ) : (
              <UnAuthenticatedRoute exact key={route.name} {...route} />
            )
          )}
          <Redirect to={'/'} from={'*'} />
        </Switch>
      </App>
    </Router>
  );
};
