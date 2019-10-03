import jwt from 'jsonwebtoken';

export default (_id, expiresIn = '7d') => {
  return jwt.sign({ _id }, process.env.SESSION_SECRET, { expiresIn });
};
