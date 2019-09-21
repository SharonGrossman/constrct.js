import { instance } from '../../services/axios.service';

export const register = async ({ name, email, password }) => {
  const {
    data: { token }
  } = await instance.post('/users', {
    name,
    email,
    password
  });

  return token;
};
