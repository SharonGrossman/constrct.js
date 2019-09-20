import joi from 'joi';
import createError from 'http-errors';

export default ({ schema }) => (req, res, next) => {
  const { body } = req;
  const { error } = joi.validate(body, schema);

  if (!error) {
    return next();
  }

  const { details } = error;
  const message = details.map(({ message }) => message).join(',');

  throw createError(400, message);
};
