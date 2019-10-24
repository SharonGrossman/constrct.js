import createError from 'http-errors';
import courseRoute from '../../api/course';

export default app => {
  app.use('/', courseRoute);

  // All undefined api routes should return a 404
  app.route('/*').get((req, res, next) => {
    next(createError(404));
  });
};
