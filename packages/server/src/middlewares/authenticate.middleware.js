import expressJwt from 'express-jwt';
import pify from 'pify';

const validate = pify(expressJwt({ secret: process.env.SESSION_SECRET }));

export default () => async (req, res) => {
  // Allow access_token to be passed through query parameter as well
  if (req.query && req.query.hasOwnProperty('access_token')) {
    req.headers.authorization = `Bearer ${req.query.access_token}`;
  }

  await validate(req, res);
};
