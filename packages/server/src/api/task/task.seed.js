import Course from '../course/course.model';

export default {
  dependencies: [Course],
  seed: ([course]) => [
    {
      name: 'Cool Task',
      duration: '2 Weeks',
      course: [course._id],
    },
    {
      name: 'Cool Task 2',
      duration: '2 Days',
      course: [course._id],
    },
  ],
};
