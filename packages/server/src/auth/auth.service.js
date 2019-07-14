import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import pify from 'pify';
import createError from 'http-errors';
import User from '../api/user/user.model';

const validateJwt = pify(expressJwt({ secret: process.env.SESSION_SECRET }));

export const isAuthenticated = () => async (req, res) => {
  // Allow access_token to be passed through query parameter as well
  if (req.query && req.query.hasOwnProperty('access_token')) {
    req.headers.authorization = `Bearer ${req.query.access_token}`;
  }

  return validateJwt(req, res)
    .then(() => {
      return User.findById(req.user._id);
    })
    .then(user => {
      if (!user) {
        return Promise.reject(createError(401));
      }

      req.user = user;
    });
};

export const isAdmin = () => async (req, res) => {
  await isAuthenticated()(req, res);

  if (!req.user.admin) {
    throw createError(403);
  }
};

export function signToken (_id, expiresIn = '7d') {
  return jwt.sign({_id}, process.env.SESSION_SECRET, {expiresIn});
}