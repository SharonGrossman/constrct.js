import React from 'react';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import schema from './login-form.schema';
import { Padded } from 'mui-flex-layout';
import styled from 'styled-components';

const initialValues = { email: '', password: '' };

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
          <Padded>
            <Field fullWidth variant={'outlined'} type="email" label="Email" name="email" component={TextField} />
          </Padded>
          <Padded>
            <Field
              fullWidth
              type="password"
              variant={'outlined'}
              label="Password"
              name="password"
              component={TextField}
            />
          </Padded>
          <Padded m={1}>
            <Button fullWidth color={'secondary'} variant={'contained'} type={'submit'}>
              {'Login'}
            </Button>
          </Padded>
        </FullForm>
      )}
    />
  );
};
