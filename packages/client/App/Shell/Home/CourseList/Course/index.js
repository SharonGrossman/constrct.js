import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { LaptopChromebook } from '@material-ui/icons';
import { Row, Column } from 'mui-flex-layout';
import { useHistory } from '../../../../Providers/HistoryProvider';

const CourseCard = styled(Card)`
  max-width: 345px;
`;

const Course = ({ course: { name, description, _id: id } }) => {
  const { navigate } = useHistory();

  const handleClick = () => {
    navigate(`/course/${id}`);
  };

  return (
    <Row p={2} justifyContent={'center'} alignItems={'center'} width={'25%'} height={'240px'}>
      <CourseCard>
        <CardActionArea onClick={handleClick}>
          <CardMedia>
            <Row justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <LaptopChromebook />
            </Row>
          </CardMedia>
          <CardContent>
            <Column justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <Typography variant={'h6'}>{name}</Typography>
              <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                {description}
              </Typography>
            </Column>
          </CardContent>
        </CardActionArea>
      </CourseCard>
    </Row>
  );
};

export default Course;
