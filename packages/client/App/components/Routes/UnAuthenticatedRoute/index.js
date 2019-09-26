import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../../Providers/AuthProvider';
import { useAxios } from '../../../Providers/AxiosProvider';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { authenticated, token, setUser, setAuthenticated } = useAuth();
  const { get, updateHeaderToken } = useAxios();

  const authenticate = async () => {
    const data = await get({ url: '/api/users/me' });

    setUser(data);
    setAuthenticated(true);
  };

  useEffect(() => {
    updateHeaderToken(token);
    if (token && !authenticated) {
      authenticate();
    }
  }, []);

  return !authenticated && !authRequired ? (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  ) : (
    <Redirect to={'/'} />
  );
};
