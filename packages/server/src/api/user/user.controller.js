import createError from 'http-errors';
import _ from 'lodash';
import User from './user.model';
import { signToken } from '../../auth/auth.service';

export const index = () => User.find({});

export const show = async ({ params: { id } }) => {
  const user = await User.findById(id);

  if (!user) {
    throw createError(404);
  }
};

export const update = async ({ user, params: { id }, body }) => {
  if (!user._id.equals(id) && !user.admin) {
    throw createError(403);
  }

  const data = _.pick(body, ['name', 'email']);

  const result = await User.findByIdAndUpdate(id, { $set: data });

  if (!result) {
    throw createError(404);
  }
};

export const changePassword = async ({ user, params: { id }, body: { oldPassword, newPassword } }) => {
  if (typeof oldPassword !== 'string' || typeof newPassword !== 'string') {
    throw createError(400, 'missing password arguments');
  }

  if (!user._id.equals(id)) {
    throw createError(403);
  }

  const authenticated = await user.authenticate(oldPassword);

  if (!authenticated) {
    throw createError(403);
  }

  user.setPassword(newPassword);
  user.save();
};

export const me = ({ user }) => user;
