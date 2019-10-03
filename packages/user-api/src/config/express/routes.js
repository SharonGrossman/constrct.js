import { join } from 'path';
import createError from 'http-errors';
import userRoute from '../../api/user';

export default app => {
  app.use('/', userRoute);

  // All undefined api routes should return a 404
  app.route('/:url(api|auth)/*').get((req, res, next) => {
    next(createError(404));
  });
};
