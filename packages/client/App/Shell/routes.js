import React from 'react';
import Home from './Home';
import Course from './Course';
import Profile from './Profile';
import Shell from '.';

const base = {
  layout: Shell,
  authRequired: true
};

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    ...base
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    ...base
  },
  {
    path: '/course/:id',
    name: 'course',
    component: Course,
    ...base
  }
];
