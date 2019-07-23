import React from 'react';
import styled from 'styled-components';
import RowContent from '../components/Layout/RowContent';
import ColumnContent from '../components/Layout/ColumnContent';

const Video = styled.video`
  object-fit: cover;
  min-width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  top: 0;
  padding: none;
`;

export default ({ children }) => (
  <RowContent width={'100%'}>
    <Video loop autoPlay>
      <source src="../../assets/Words.mp4" />
    </Video>
    <ColumnContent width={'100%'} justifyContent={'center'} alignItems={'center'}>
      {children}
    </ColumnContent>
  </RowContent>
);
