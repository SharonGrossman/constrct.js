import createError from 'http-errors';
import User from '../api/user/user.model';

export default () => async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return Promise.reject(createError(401));
  }

  // eslint-disable-next-line require-atomic-updates
  req.user = user;
};
