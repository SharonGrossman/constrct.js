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
    <Row p={1}>
      <Field
        fullWidth
        variant={'outlined'}
        label="First Name"
        name="name.first"
        component={TextField}
      />
      <Padded />
      <Field
        label="Last Name"
        fullWidth
        variant={'outlined'}
        name="name.last"
        component={TextField}
      />
    </Row>
    <Padded>
      <Field
        type="email"
        fullWidth
        variant={'outlined'}
        label="Email"
        name="email"
        component={TextField}
      />
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
);
