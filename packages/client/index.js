import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './styles.css';
import Router from './routes';

const rootComponentRender = () =>
  render(
    <AppContainer>
      <Router />
    </AppContainer>,
    document.querySelector('#root')
  );

rootComponentRender();

module.hot.accept();
