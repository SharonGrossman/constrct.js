import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../../Providers/AuthProvider';
import { updateHeaderToken } from '../../../services/axios.service';
import { loadUser } from '../../../services/auth.service';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { authenticated, token, setUser, setLoading, setAuthenticated } = useAuth();

  const authenticate = async () => {
    setLoading(true);
    const user = await loadUser();

    setUser(user);
    setAuthenticated(true);
    setLoading(false);
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
