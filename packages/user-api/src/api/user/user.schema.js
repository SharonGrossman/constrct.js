import joi from 'joi';

export const update = {
  name: joi.object().keys({
    first: joi.string().required(),
    last: joi.string().required()
  }),
  email: joi
    .string()
    .email()
    .required()
};

export const create = {
  ...update,
  password: joi.string()
};
