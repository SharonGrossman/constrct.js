import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { LaptopChromebook } from '@material-ui/icons';
import { Row, Column } from 'mui-flex-layout';
import { useHistory } from '../../../../Providers/HistoryProvider';

const CourseCard = styled(Card)`
  height: 200px;
  width: 500px;
`;
const CourseActionArea = styled(CardActionArea)`
  height: 200px;
  width: 500px;
`;

const Course = ({ course: { name, description, _id: id } }) => {
  const { navigate } = useHistory();

  const handleClick = () => {
    navigate(`/course/${id}`);
  };

  return (
    <Row p={2} justifyContent={'center'} alignItems={'center'} width={'25%'}>
      <CourseCard>
        <CourseActionArea onClick={handleClick}>
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
        </CourseActionArea>
      </CourseCard>
    </Row>
  );
};

export default Course;
