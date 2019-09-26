import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../../Providers/AuthProvider';
import LoadingScreen from '../../LoadingScreen';
import { useAxios } from '../../../Providers/AxiosProvider';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { authenticated, removeToken, token, setUser, setAuthenticated } = useAuth();
  const { get, updateHeaderToken } = useAxios();
  const userIsAuthenticating = token && !authenticated;

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
    if (userIsAuthenticating) {
      authenticate();
    }
  }, []);

  if (userIsAuthenticating) {
    return <LoadingScreen />;
  }

  return authenticated && authRequired ? (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  ) : (
    <Redirect to={'/login'} />
  );
};
