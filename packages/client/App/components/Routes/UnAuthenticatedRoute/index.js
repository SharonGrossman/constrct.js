import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../../Providers/AuthProvider';
import { updateHeaderToken } from '../../../services/axios.service';
import { loadUser } from '../../../services/auth.service';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { authenticated, token, setUser, setLoading, setAuthenticated } = useAuth();

  const authenticate = () => {
    setLoading(true);
    loadUser().then(user => {
      setUser(user);
      setAuthenticated(true);
      setLoading(false);
    });
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
      // eslint-disable-next-line react/jsx-no-bind
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
