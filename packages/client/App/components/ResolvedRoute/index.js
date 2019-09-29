import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import LoadingScreen from '../LoadingScreen';
import { useToken } from '../../Providers/TokenProvider';
import { useUser } from '../../Providers/UserProvider';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { token } = useToken();
  const { user } = useUser();
  const hasToken = token && !user;

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
