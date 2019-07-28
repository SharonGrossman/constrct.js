import { authInstance } from '../../services/axios.service';

export const login = ({ email, password }) =>
  authInstance.post('/local', { email, password }).then(({ data: { token } }) => token);
