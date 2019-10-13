import { generateApi } from '../../utilities/axios/generate-api';
import { userClient } from '../../utilities/axios/clients';

export default () => {
  const { get, post } = generateApi({ instance: userClient });

  const getMyself = async () => get({ url: '/me' });

  const createUser = async ({ email, password, name }) => {
    const { token } = await post({ url: '/', body: { email, password, name } });

    return token;
  };

  return { getMyself, createUser };
};
