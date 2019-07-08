import createError from 'http-errors';
import _ from 'lodash';
import Course from './course.model';
import { emitter } from './course.socket';

export const index = ({ user }) => Course.find({ user });

export const show = async ({ user: { _id }, params: { id } }) => {
  const todo = await Course.findById(id);

  if (!todo || !todo.user.equals(_id)) {
    throw createError(404);
  }

  return todo;
};

export const create = async ({ user, body }, res) => {
  const data = _.pick(body, ['text']);
  const todo = await Course.create({ ...data, user });

  if (!todo) {
    throw createError(404);
  }

  res.status(201);

  return todo;
};

export const update = async ({ user, params: { id }, body }) => {
  const data = _.pick(body, ['completed']);

  const res = await Course.findOneAndUpdate({ _id: id, user }, { $set: data }, { new: true });

  if (!res) {
    throw createError(404);
  }
};

export const destroy = async ({ user, params: { id } }) => {
  const todo = await Course.findOneAndRemove({ _id: id, user });

  if (!todo) {
    throw createError(404);
  }
};
