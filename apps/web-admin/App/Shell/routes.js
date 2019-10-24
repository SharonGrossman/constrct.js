import React from 'react';
import Home from './Home';
import User from './User';
import Profile from './Profile';
import Shell from '.';

const base = {
  layout: Shell,
  authRequired: true
};

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  }
];

routes = routes.map(route => ({ ...base, ...route }));

export default routes;
