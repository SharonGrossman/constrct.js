import React from 'react';
import Home from './Home';
import Shell from './';
import Course from './Course';
import Task from './Task';

const base = {
  layout: Shell,
  authRequired: true
};

export default [
  {
    path: '/',
    component: Home,
    ...base
  },
  {
    path: '/course/:id',
    component: Course,
    ...base
  },
  {
    path: '/task/:id',
    component: Task,
    ...base
  }
];
