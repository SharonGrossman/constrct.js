import createError from 'http-errors';
import _ from 'lodash';
import Task from './task.model';

export const index = ({ params: { id: course } }) => Task.find({ course });

export const getAll = () => Task.find({});

export const show = ({ params: { id } }) => Task.findById(id);

export const create = async ({ body }, res) => {
  const data = _.pick(body, ['text']);
  const task = await Task.create({ ...data });

  if (!task) {
    throw createError(404);
  }

  res.status(201);

  return task;
};

export const update = async ({ user, params: { id }, body }) => {
  const data = _.pick(body, ['completed']);

  const res = await Task.findOneAndUpdate({ _id: id, user }, { $set: data }, { new: true });

  if (!res) {
    throw createError(404);
  }
};

export const destroy = async ({ user, params: { id } }) => {
  const todo = await Task.deleteOne({ _id: id, user });

  if (!todo) {
    throw createError(404);
  }
};
