import { instance } from './axios.service';

export const loadUser = () => instance.get('/users/me').then(({ data: user }) => user);
