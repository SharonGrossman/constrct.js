import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import ResolvedRoute from './App/components/ResolvedRoute';
import shellRoutes from './App/Shell/routes';
import exteriorRoutes from './App/Exterior/routes';

const routes = [...shellRoutes, ...exteriorRoutes];

export default () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <App>
        <Switch>
          {routes.map(route => (
            <ResolvedRoute exact key={route.name} {...route} />
          ))}
          <Redirect to={'/'} from={'*'} />
        </Switch>
      </App>
    </Router>
  );
};
