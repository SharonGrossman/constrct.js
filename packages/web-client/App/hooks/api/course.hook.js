import { generateApi } from '../../utilities/axios/generate-api';
import { courseClient } from '../../utilities/axios/clients';

export default () => {
  const { get, post } = generateApi({ instance: courseClient });

  const getAllCourses = async () => get({ url: '/' });
  const getCourse = async ({ id }) => get({ url: `/${id}` });
  const addCourse = async ({ name }) => post({ url: `/` }, { body: { name } });

  return { getCourse, getAllCourses, addCourse };
};
