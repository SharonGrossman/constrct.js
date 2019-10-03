import React from 'react';
import { Formik } from 'formik';
import schema from './login-form.schema';
import Form from './Form';

const initialValues = { email: '', password: '' };

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
