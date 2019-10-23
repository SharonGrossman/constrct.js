import jwt from 'jsonwebtoken';

export default (user, expiresIn = '7d') =>
  jwt.sign(user.toJSON(), process.env.SESSION_SECRET, { expiresIn });
