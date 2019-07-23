import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../Providers/AuthProvider';
import { instance, updateHeaderToken } from '../../Providers/AxiosProvider';
import LoadingScreen from '../LoadingScreen';

export default ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const { authenticated, loading, token, setUser, setLoading, setAuthenticated } = useAuth();

  const loadUser = () => {
    setLoading(true);
    return instance.get('/users/me').then(({ data: user }) => {
      setUser(user);
      setAuthenticated(true);
      setLoading(false);
    });
  };

  useEffect(() => {
    updateHeaderToken(token);
    if (token && !authenticated) {
      loadUser();
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
