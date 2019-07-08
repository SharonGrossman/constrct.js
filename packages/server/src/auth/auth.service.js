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

  await validateJwt(req, res);

  const user = await User.findById(req.user._id);

  if (!user) {
    throw createError(401);
  }

  req.user = user;
};

export const isAdmin = () => async (req, res) => {
  await isAuthenticated()(req, res);

  if (!req.user.admin) {
    throw createError(403);
  }
};

export const signToken = (_id, expiresIn = '7d') => jwt.sign({ _id }, process.env.SESSION_SECRET, { expiresIn });
