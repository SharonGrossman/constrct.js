import { authInstance } from '../../services/axios.service';

export const login = async ({ email, password }) => {
  const {
    data: { token }
  } = await authInstance.post('/local', { email, password });

  return token;
};
