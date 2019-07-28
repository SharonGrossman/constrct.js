import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../Providers/AuthProvider';
import { updateHeaderToken } from '../../services/axios.service';
import LoadingScreen from '../LoadingScreen';
import { loadUser } from '../../services/auth.service';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { authenticated, loading, removeToken, token, setUser, setLoading, setAuthenticated } = useAuth();

  const userIsAuthenticating = token && !authenticated;

  const authenticate = () => {
    setLoading(true);
    loadUser()
      .then(user => {
        setUser(user);
        setAuthenticated(true);
        setLoading(false);
      })
      .catch(() => {
        removeToken();
        setLoading(false);
      });
  };

  useEffect(() => {
    updateHeaderToken(token);
    if (userIsAuthenticating) {
      authenticate();
    }
  }, []);

  if (loading || userIsAuthenticating) {
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
