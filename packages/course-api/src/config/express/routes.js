import { join } from 'path';
import createError from 'http-errors';
import courseRoute from '../../api/course';
import authRoute from '../../auth';

export default app => {
  app.use('/', courseRoute);

  app.use('/auth', authRoute);

  // All undefined api routes should return a 404
  app.route('/:url(api|auth)/*').get((req, res, next) => {
    next(createError(404));
  });
};
