import joi from 'joi';

export default {
  text: joi.string().required(),
  user: joi.string().required()
};
