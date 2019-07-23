import passport from 'passport';
import User from '../../api/user/user.model';
import { signToken } from '../auth.service';
import _ from 'lodash';
import createError from 'http-errors';

export const index = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    const error = err || info;

    if (error) {
      const errMap = {
        'Missing credentials': 400,
        'Password or username is incorrect': 401
      };

      error.status = errMap[error.message];

      return next(error);
    }

    res.json({ token: signToken(user._id) });
  })(req, res, next);
};

export const register = async ({ body }, res) => {
  const data = _.pick(body, ['name', 'email', 'password']);

  const user = await User.create({ ...data });

  if (!user) {
    throw createError(400);
  }

  return res.json({ token: signToken(user._id) });
};
