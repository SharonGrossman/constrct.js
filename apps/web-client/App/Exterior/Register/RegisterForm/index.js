import React from 'react';
import { Formik } from 'formik';
import schema from './register-form.schema';
import Form from './Form';

const initialValues = { email: '', name: { first: '', last: '' }, password: '' };

export default ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
      render={Form}
    />
  );
};
