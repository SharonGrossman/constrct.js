import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import LoadingScreen from '../LoadingScreen';
import { useAuth } from '../../Providers/AuthProvider';
import { useUser } from '../../Providers/UserProvider';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { token } = useAuth();
  const { authenticated } = useUser();
  const hasToken = token && !authenticated;

  if (hasToken) {
    return <LoadingScreen />;
  }

  return (authenticated && authRequired) || (!authenticated && !authRequired) ? (
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
