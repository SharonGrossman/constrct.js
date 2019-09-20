import createError from 'http-errors';
import authenticate from './authenticate.middleware';

export default () => async (req, res) => {
  await authenticate()(req, res);

  if (!req.user.admin) {
    throw createError(403);
  }
};
