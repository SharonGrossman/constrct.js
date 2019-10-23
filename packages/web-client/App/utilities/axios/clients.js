import axios from 'axios';

export const authClient = {
  instance: axios.create({
    baseURL: `${USER_API_URL}/auth`,
    responseType: 'json'
  }),
  authRequired: false
};

export const userClient = {
  instance: axios.create({
    baseURL: `${USER_API_URL}/`,
    responseType: 'json'
  }),
  authRequired: true
};

export const courseClient = {
  instance: axios.create({
    baseURL: `${COURSE_API_URL}/`,
    responseType: 'json'
  }),
  authRequired: true
};

export default [courseClient, userClient, authClient];
