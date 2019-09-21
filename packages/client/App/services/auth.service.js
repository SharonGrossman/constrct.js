import { instance } from './axios.service';

export const loadUser = async () => {
  const { data: user } = await instance.get('/users/me');

  return user;
};
