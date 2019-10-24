import React from 'react';
import { Row, Padded } from 'mui-flex-layout';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Form, Field } from 'formik';

const FullForm = styled(Form)`
  width: 65%;
`;

export default () => (
  <FullForm>
    <Padded>
      <Field
        fullWidth
        variant={'outlined'}
        type="email"
        label="Email"
        name="email"
        component={TextField}
      />
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
);
