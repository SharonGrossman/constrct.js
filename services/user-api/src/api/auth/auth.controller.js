import passport from 'passport';
import { signToken } from 'express-auth';
import createError from 'http-errors';
import User from '../user/user.model';

const authenticate = (req, res, next, cb) =>
  new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user, info) => {
      const error = err || info;

      if (error) {
        const errMap = {
          'Missing credentials': 400,
          'Password or username is incorrect': 401
        };

        error.status = errMap[error.message];

        return reject(error);
      }

      return resolve(cb(user));
    })(req, res, next);
  });

export const login = async (req, res, next) => {
  await authenticate(req, res, next, user => res.json({ user, token: signToken(user) }));
};

export const register = async ({ body }, res) => {
  const { name, email, password } = body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw createError(401, 'Email or Password are not valid');
  }

  const user = await User.create({ name, email, password });

  if (!user) {
    throw createError(400, 'Something went wrong, please try again');
  }

  return res.json({ user, token: signToken(user) });
};

export const authAdmin = async (req, res, next) => {
  const isAdmin = user => {
    if (!user.admin) {
      throw createError(401, 'Only Admins are authorized to login');
    }

    res.json({ user, token: signToken(user) });
  };

  await authenticate(req, res, next, user => isAdmin(user));
};
