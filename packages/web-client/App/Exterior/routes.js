import React from 'react';
import Login from './Login';
import Register from './Register';
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
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    ...base
  }
];
