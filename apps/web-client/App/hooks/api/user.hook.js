import { generateApi } from '../../utilities/axios/generate-api';
import { userClient } from '../../utilities/axios/clients';

export default () => {
  const { instance } = userClient;
  const { get, post } = generateApi({ instance });

  const getMyself = async () => get({ url: '/me' });

  return { getMyself };
};
