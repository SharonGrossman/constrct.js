import Course from '../course/course.model';

export default {
  dependencies: [Course],
  seed: ([course]) => [
    {
      name: 'Cool Task',
      course
    }
  ]
};
