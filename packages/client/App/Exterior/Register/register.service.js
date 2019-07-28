import { instance } from '../../services/axios.service';

export const register = ({ name, email, password }) =>
  instance
    .post('/users', {
      name,
      email,
      password
    })
    .then(({ data: { token } }) => token);
