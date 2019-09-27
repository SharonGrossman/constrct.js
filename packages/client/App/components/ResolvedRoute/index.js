import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import LoadingScreen from '../LoadingScreen';
import { useAuth } from '../../Providers/AuthProvider';
import { useAxios } from '../../Providers/AxiosProvider';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { authenticated, token, removeToken, setUser, setAuthenticated } = useAuth();
  const { get, updateHeaderToken } = useAxios();
  const hasToken = token && !authenticated;

  const authenticate = async () => {
    try {
      const data = await get({ url: '/api/users/me' });

      setUser(data);
      setAuthenticated(true);
    } catch (error) {
      removeToken();
    }
  };

  useEffect(() => {
    updateHeaderToken(token);
    if (token && !authenticated) {
      authenticate();
    }
  }, []);

  if (hasToken) {
    return <LoadingScreen />;
  }

  const ensureUnauthenticatedRoute = !authenticated && !authRequired;
  const ensureAuthenticatedRoute = authenticated && authRequired;

  return ensureAuthenticatedRoute || ensureUnauthenticatedRoute ? (
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
