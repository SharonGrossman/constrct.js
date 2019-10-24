import createError from 'http-errors';
import userRoute from '../../api/user';
import authRoute from '../../api/auth';

export default app => {
  app.use('/', userRoute);
  app.use('/auth', authRoute);

  // All undefined api routes should return a 404
  app.route('/:url(api|auth)/*').get((req, res, next) => {
    next(createError(404));
  });
};
