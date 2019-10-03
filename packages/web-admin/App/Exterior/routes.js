import React from 'react';
import Login from './Login';
import Exterior from '.';

const base = {
  layout: Exterior
};

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    ...base
  }
];
