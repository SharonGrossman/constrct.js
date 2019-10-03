import createError from 'http-errors';
import authenticate from './authenticate.middleware';
import injectUser from './inject-user.middleware';

export default () => async (req, res) => {
  await authenticate()(req, res);
  await injectUser()(req, res);

  if (!req.user.admin) {
    throw createError(403);
  }
};
