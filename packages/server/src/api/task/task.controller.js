import createError from 'http-errors';
import _ from 'lodash';
import Task from './task.model';
import { emitter } from './task.socket';

export const index = ({ user }) => Task.find({ user });

export const show = async ({ user: { _id }, params: { id } }) => {
  const todo = await Task.findById(id);

  if (!todo || !todo.user.equals(_id)) {
    throw createError(404);
  }

  return todo;
};

export const create = async ({ user, body }, res) => {
  const data = _.pick(body, ['text']);
  const todo = await Task.create({ ...data, user });

  if (!todo) {
    throw createError(404);
  }

  res.status(201);

  return todo;
};

export const update = async ({ user, params: { id }, body }) => {
  const data = _.pick(body, ['completed']);

  const res = await Task.findOneAndUpdate({ _id: id, user }, { $set: data }, { new: true });

  if (!res) {
    throw createError(404);
  }
};

export const destroy = async ({ user, params: { id } }) => {
  const todo = await Task.findOneAndRemove({ _id: id, user });

  if (!todo) {
    throw createError(404);
  }
};
