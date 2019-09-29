import React from 'react';
import Home from './Home';
import Course from './Course';
import Profile from './Profile';
import Admin from './Admin';
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
    path: '/admin',
    name: 'admin',
    admin: true,
    component: Admin
  },
  {
    path: '/course/:id',
    name: 'course',
    component: Course
  }
];

routes = routes.map(route => ({ ...base, ...route }));

export default routes;
