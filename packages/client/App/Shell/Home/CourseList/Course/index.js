import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardActionArea, CardMedia, Typography, Box } from '@material-ui/core';
import { LaptopChromebook } from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';

const CourseCard = styled(Card)`
  max-width: 345px;
`;

const CenterBox = ({ children, direction = 'row' }) => (
  <Box p={1} flexDirection={direction} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
    {children}
  </Box>
);

export default ({ course: { name, description } }) => {
  const {
    palette: {
      secondary: { main }
    }
  } = useTheme();

  const CardMediaWithBackground = styled(CardMedia)`
    background-color: ${main};
  `;

  return (
    <Box p={2} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'25%'} height={'240px'}>
      <CourseCard>
        <CardActionArea>
          <CardMediaWithBackground>
            <CenterBox>
              <LaptopChromebook />
            </CenterBox>
          </CardMediaWithBackground>
          <CardContent>
            <CenterBox direction={'column'}>
              <Typography variant={'h6'}>{name}</Typography>
              <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                {description}
              </Typography>
            </CenterBox>
          </CardContent>
        </CardActionArea>
      </CourseCard>
    </Box>
  );
};
