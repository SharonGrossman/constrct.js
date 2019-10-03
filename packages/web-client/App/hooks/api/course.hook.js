import React from 'react';
import axios from 'axios';
import { generateApi } from './generate-api';

const AUTH_REQUIRED = true;

export const courseClient = axios.create({
  baseURL: `${COURSE_API_URL}/`,
  responseType: 'json'
});

export default () => {
  const { get, post } = generateApi({ instance: courseClient });

  const getAllCourses = async () => get({ url: '/' });
  const getCourse = async ({ id }) => get({ url: `/${id}` });
  const addCourse = async ({ name }) => post({ url: `/` }, { body: { name } });

  return { getCourse, getAllCourses, addCourse };
};
