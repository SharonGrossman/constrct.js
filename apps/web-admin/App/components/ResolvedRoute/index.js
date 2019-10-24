import React from 'react';
import { Route, Redirect } from 'react-router';
import LoadingScreen from '../LoadingScreen';
import { useAuth } from '../../Providers/AuthProvider';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { user, getToken } = useAuth();
  const hasToken = getToken() && !user;

  if (hasToken) {
    return <LoadingScreen />;
  }

  return (user && authRequired) || (!user && !authRequired) ? (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  ) : authRequired ? (
    <Redirect to={'/login'} />
  ) : (
    <Redirect to={'/'} />
  );
};
