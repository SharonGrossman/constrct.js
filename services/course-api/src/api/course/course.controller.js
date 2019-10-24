import createError from 'http-errors';
import Course from './course.model';

export const index = () => Course.find();

export const show = async ({ params: { id } }) => {
  const course = await Course.findById(id);

  if (!course) {
    throw createError(404);
  }

  return course;
};

export const create = async ({ user, body }, res) => {
  const { text } = body;
  const course = await Course.create({ text, user });

  if (!course) {
    throw createError(404);
  }

  res.status(201);

  return course;
};

export const update = async ({ user, params: { id }, body }) => {
  const { completed } = body;

  const res = await Course.findOneAndUpdate({ _id: id, user }, { $set: completed }, { new: true });

  if (!res) {
    throw createError(404);
  }
};

export const destroy = async ({ user, params: { id } }) => {
  const course = await Course.deleteOne({ _id: id });

  if (!course) {
    throw createError(404);
  }
};
