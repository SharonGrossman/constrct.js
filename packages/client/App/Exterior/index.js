import React from 'react';
import styled from 'styled-components';
import { Padded, Row, Column } from 'mui-flex-layout';
import { SchoolOutlined, Code as CodeOutlined, WebOutlined, ComputerOutlined } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const logoSize = '75px !important';

const School = styled(SchoolOutlined)`
  font-size: ${logoSize};
`;
const Computer = styled(ComputerOutlined)`
  font-size: ${logoSize};
`;
const Code = styled(CodeOutlined)`
  font-size: ${logoSize};
`;
const Web = styled(WebOutlined)`
  font-size: ${logoSize};
`;

export default ({ children }) => (
  <Row width={'100%'} height={'100%'}>
    <Column width={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant={'h5'}>{'makmacademy'}</Typography>
      <Row justifyContent={'center'} alignItems={'center'} width={'100%'}>
        <Padded padding={3}>
          <School />
        </Padded>
        <Padded padding={3}>
          <Web />
        </Padded>
        <Padded padding={3}>
          <Computer />
        </Padded>
        <Padded padding={3}>
          <Code />
        </Padded>
      </Row>
    </Column>
    <hr />
    <Column width={'100%'} height={'100%'}>
      {children}
    </Column>
  </Row>
);
