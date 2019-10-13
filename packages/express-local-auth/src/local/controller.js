import passport from 'passport';
import { signToken } from 'express-auth';

const authenticate = (req, res, next, cb) => {
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

    cb({ user });
  })(req, res, next);
};

export const index = (req, res, next) => {
  authenticate(req, res, next, ({ user }) => res.json({ token: signToken(user._id) }));
};

export const admin = (req, res, next) => {
  const isAdmin = ({ user }) => {
    if (!user.admin) {
      return next(401);
    }

    res.json({ token: signToken(user._id) });
  };

  authenticate(req, res, next, ({ user }) => isAdmin({ user }));
};
