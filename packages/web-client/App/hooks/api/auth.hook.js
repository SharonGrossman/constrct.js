import { useAuth } from '../../Providers/AuthProvider';
import { generateApi } from '../../utilities/axios/generate-api';
import { authClient } from '../../utilities/axios/clients';

export default () => {
  const { instance } = authClient;
  const { get, post } = generateApi({ instance });
  const { setLoggedOut } = useAuth();

  const login = async ({ email, password }) => post({ url: '/login', body: { email, password } });

  const register = async ({ email, password, name }) => {
    const data = await post({ url: '/register', body: { email, password, name } });

    return data;
  };

  const logout = () => {
    setLoggedOut();
  };

  return { login, logout, register };
};
