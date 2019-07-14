import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { LaptopChromebook } from '@material-ui/icons';
import RowContent from '../../../../components/Layout/RowContent';
import ColumnContent from '../../../../components/Layout/ColumnContent';
import { useTheme } from '@material-ui/styles';
import { withRouter } from 'react-router';

const CourseCard = styled(Card)`
  max-width: 345px;
`;

const Course = ({ course: { name, description, _id: id }, history }) => {
  const handleClick = () => {
    history.push(`/course/${id}`);
  };

  const {
    palette: {
      secondary: { main }
    }
  } = useTheme();

  const CardMediaWithBackground = styled(CardMedia)`
    background-color: ${main};
  `;

  return (
    <RowContent p={2} justifyContent={'center'} alignItems={'center'} width={'25%'} height={'240px'}>
      <CourseCard>
        <CardActionArea onClick={handleClick}>
          <CardMediaWithBackground>
            <RowContent justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <LaptopChromebook />
            </RowContent>
          </CardMediaWithBackground>
          <CardContent>
            <ColumnContent justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <Typography variant={'h6'}>{name}</Typography>
              <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                {description}
              </Typography>
            </ColumnContent>
          </CardContent>
        </CardActionArea>
      </CourseCard>
    </RowContent>
  );
};

export default withRouter(Course);
