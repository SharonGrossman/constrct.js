import createError from 'http-errors';
import { signToken } from '../../auth/jwt.service';
import User from './user.model';

export const index = () => User.find({});

export const show = async ({ params: { id } }) => {
  const user = await User.findById(id);

  if (!user) {
    throw createError(404);
  }
};

export const create = async ({ body }, res) => {
  const { name, email, password } = body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw createError(401, 'Email or Password are not valid');
  }

  const user = await User.create({ name, email, password });

  if (!user) {
    throw createError(400, 'Something went wrong, please try again');
  }

  return res.json({ token: signToken(user._id) });
};

export const update = async ({ user, params: { id }, body }) => {
  if (!user._id.equals(id) && !user.admin) {
    throw createError(403);
  }

  const { name, email } = body;

  const result = await User.findByIdAndUpdate(id, { $set: { name, email } });

  if (!result) {
    throw createError(404);
  }
};

export const me = ({ user }) => user;
