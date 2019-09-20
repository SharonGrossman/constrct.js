import { join } from 'path';
import createError from 'http-errors';

// inject:route-imports
import taskRoute from '../../api/task';
import courseRoute from '../../api/course';
import userRoute from '../../api/user';

import authRoute from '../../auth';

export default app => {
  // inject:route-usage
  app.use('/api/tasks', taskRoute);
  app.use('/api/courses', courseRoute);
  app.use('/api/users', userRoute);

  app.use('/auth', authRoute);

  // All undefined api routes should return a 404
  app.route('/:url(api|auth)/*').get((req, res, next) => {
    next(createError(404));
  });

  app
    .route('/*')
    .get((req, res) =>
      res.sendFile(join(__dirname, '..', '..', '..', '..', 'client', 'index.html'))
    );
};
