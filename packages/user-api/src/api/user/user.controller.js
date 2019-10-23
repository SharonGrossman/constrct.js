import createError from 'http-errors';
import User from './user.model';

export const index = () => User.find({});

export const show = async ({ params: { id } }) => {
  const user = await User.findById(id);

  if (!user) {
    throw createError(404);
  }

  return user;
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
