import { generateApi } from '../../utilities/axios/generate-api';
import { courseClient } from '../../utilities/axios/clients';

export default () => {
  const { instance } = courseClient;
  const { get, post } = generateApi({ instance });

  const getAllCourses = async () => get({ url: '/' });
  const getCourse = async ({ id }) => get({ url: `/${id}` });
  const addCourse = async ({ name }) => post({ url: `/` }, { body: { name } });

  return { getCourse, getAllCourses, addCourse };
};
