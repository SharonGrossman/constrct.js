import createError from 'http-errors';
import _ from 'lodash';
import Todo from './todo.model';
import { emitter } from './todo.socket';

export const index = ({ user }) => Todo.find({ user });

export const show = async ({ user: { _id }, params: { id } }) => {
  const todo = await Todo.findById(id);

  if (!todo || !todo.user.equals(_id)) {
    throw createError(404);
  }

  return todo;
};

export const create = async ({ user, body }, res) => {
  const data = _.pick(body, ['text']);
  const todo = await Todo.create({ ...data, user });

  if (!todo) {
    throw createError(404);
  }

  res.status(201);

  return todo;
};

export const update = async ({ user, params: { id }, body }) => {
  const data = _.pick(body, ['completed']);

  const res = await Todo.findOneAndUpdate({ _id: id, user }, { $set: data }, { new: true });

  if (!res) {
    throw createError(404);
  }
};

export const setCompleted = async ({ user, body: { completed } }) => {
  const { n: result } = await Todo.update({ user }, { $set: { completed } }, { multi: true });

  if (!result) {
    throw createError(404);
  }

  emitter.emit('completeAll', { completed, user });
};

export const destroy = async ({ user, params: { id } }) => {
  const todo = await Todo.findOneAndRemove({ _id: id, user });

  if (!todo) {
    throw createError(404);
  }
};

export const clearCompleted = async ({ user }) => {
  const {
    result: { ok }
  } = await Todo.deleteMany({ completed: true, user });

  if (ok !== 1) {
    throw createError(404);
  }

  emitter.emit('clearCompleted', { user });
};
