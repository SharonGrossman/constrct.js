import React from 'react';
import styled from 'styled-components';
import { Padded, Row, Column } from '../components/Layout';
import { SchoolOutlined, Code as CodeOutlined, WebOutlined, ComputerOutlined } from '@material-ui/icons';

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
  <Row width={'100%'}>
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
    <hr />
    <Column width={'100%'} height={'100%'}>
      {children}
    </Column>
  </Row>
);
