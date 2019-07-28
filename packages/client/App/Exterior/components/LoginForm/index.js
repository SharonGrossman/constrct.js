import React from 'react';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import schema from './login-form.schema';
import { Column, Padded } from '../../../components/Layout';

const initialValues = { email: '', password: '' };

export default ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
      render={() => (
        <Form>
          <Column justifyContent={'center'} alignItems={'center'}>
            <Padded>
              <Field type="email" label="Email" name="email" component={TextField} />
            </Padded>
            <Padded>
              <Field type="password" label="Password" name="password" component={TextField} />
            </Padded>
            <Padded>
              <Button type={'submit'}>{'Login'}</Button>
            </Padded>
          </Column>
        </Form>
      )}
    />
  );
};
