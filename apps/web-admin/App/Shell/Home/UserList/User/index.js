import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { LaptopChromebook } from '@material-ui/icons';
import { Row, Column } from 'mui-flex-layout';
import { useHistory } from 'react-router';

const UserCard = styled(Card)`
  height: 200px;
  width: 500px;
`;
const UserActionArea = styled(CardActionArea)`
  height: 200px;
  width: 500px;
`;

const User = ({
  user: {
    name: { first, last },
    _id: id
  }
}) => {
  const { push } = useHistory();

  const handleClick = () => {
    push(`/user/${id}`);
  };

  return (
    <Row p={2} justifyContent={'center'} alignItems={'center'} width={'25%'}>
      <UserCard>
        <UserActionArea onClick={handleClick}>
          <CardMedia>
            <Row justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <LaptopChromebook />
            </Row>
          </CardMedia>
          <CardContent>
            <Column justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <Typography variant={'h6'}>{`${first} ${last}`}</Typography>
            </Column>
          </CardContent>
        </UserActionArea>
      </UserCard>
    </Row>
  );
};

export default User;
