import createError from 'http-errors';
import mongoose from 'mongoose';
import { UserSchema } from 'models';

export default () => async (req, res) => {
  const User = mongoose.model('User', UserSchema);
  const user = await User.findById(req.user._id);

  if (!user) {
    return Promise.reject(createError(401));
  }

  // eslint-disable-next-line require-atomic-updates
  req.user = user;
};
