import jwt from 'jsonwebtoken';

export function signToken(_id, expiresIn = '7d') {
  return jwt.sign({ _id }, process.env.SESSION_SECRET, { expiresIn });
}
