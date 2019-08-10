import React from 'react';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import schema from './register-form.schema';
import { Row, Padded } from '../../../components/Layout';
import styled from 'styled-components';

const initialValues = { email: '', name: { first: '', last: '' }, password: '' };

const FullForm = styled(Form)`
  width: 65%;
`;

export default ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
      render={() => (
        <FullForm>
          <Row p={1}>
            <Field fullWidth variant={'outlined'} label="First Name" name="name.first" component={TextField} />
            <Padded />
            <Field label="Last Name" fullWidth variant={'outlined'} name="name.last" component={TextField} />
          </Row>
          <Padded>
            <Field type="email" fullWidth variant={'outlined'} label="Email" name="email" component={TextField} />
          </Padded>
          <Padded>
            <Field
              type="password"
              fullWidth
              label="Password"
              variant={'outlined'}
              name="password"
              component={TextField}
            />
          </Padded>
          <Padded m={1}>
            <Button type={'submit'} fullWidth variant={'contained'} color={'secondary'}>
              {'Submit'}
            </Button>
          </Padded>
        </FullForm>
      )}
    />
  );
};
