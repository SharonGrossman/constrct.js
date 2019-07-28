import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { history } from './App/services/history.service';
import './styles.css';
import Router from './routes';

const rootComponentRender = () =>
  render(
    <AppContainer>
      <Router history={history} />
    </AppContainer>,
    document.getElementById('root')
  );

rootComponentRender();

module.hot.accept();
