import { useToken } from '../../Providers/TokenProvider';
import { generateApi } from '../../utilities/axios/generate-api';
import { authClient } from '../../utilities/axios/clients';

export default () => {
  const { get, post } = generateApi({ instance: authClient });
  const { removeToken } = useToken();

  const login = async ({ email, password }) => {
    const { token } = await post({ url: '/admin', body: { email, password } });

    return token;
  };

  const logout = () => {
    removeToken();
  };

  return { login, logout };
};
