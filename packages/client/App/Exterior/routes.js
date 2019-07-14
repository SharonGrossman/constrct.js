import React from 'react';
import Exterior from './';
import Login from './Login';
import Register from './Register';

const base = {
  layout: Exterior
};

export default [
  {
    path: '/login',
    component: Login,
    ...base
  },
  {
    path: '/register',
    component: Register,
    ...base
  }
];
