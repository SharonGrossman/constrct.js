import { userClient } from '../../utilities/axios/clients';
import { generateApi } from '../../utilities/axios/generate-api';

export default () => {
  const { get, post } = generateApi({ instance: userClient });

  const getMyself = async () => get({ url: '/me' });
  const getUser = async ({ id }) => get({ url: `/${id}` });
  const getAllUsers = async () => get({ url: '/' });

  return { getMyself, getAllUsers, getUser };
};
