import React from 'react';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import schema from './register-form.schema';
import { Row, Column, Padded } from '../../../components/Layout';

const initialValues = { email: '', name: { first: '', last: '' }, password: '' };

export default ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
      render={() => (
        <Form>
          <Column alignItems={'center'} justifyContent={'center'}>
            <Row p={1}>
              <Padded>
                <Field label="First Name" name="name.first" component={TextField} />
              </Padded>
              <Padded>
                <Field label="Last Name" name="name.last" component={TextField} />
              </Padded>
            </Row>
            <Padded>
              <Field type="email" label="Email" name="email" component={TextField} />
            </Padded>
            <Padded>
              <Field type="password" label="Password" name="password" component={TextField} />
            </Padded>
            <Padded>
              <Button type={'submit'}>{'Submit'}</Button>
            </Padded>
          </Column>
        </Form>
      )}
    />
  );
};
