import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '../components/Layout';

const Background = styled.img`
  background-image: url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 90%;
`;

export default ({ children }) => (
  <Row width={'100%'}>
    <Background />
    <Column width={'100%'} height={'100%'}>
      {children}
    </Column>
  </Row>
);
