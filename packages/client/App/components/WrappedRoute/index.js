import React from 'react';
import { Route, Redirect } from 'react-router';
import { useUser } from '../../Providers/UserProvider';
import LoadingScreen from '../LoadingScreen';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { authenticated, loading } = useUser();

  if (loading) {
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
  ) : !authenticated && authRequired ? (
    <Redirect to={'/login'} />
  ) : (
    <Redirect to={'/'} />
  );
};
