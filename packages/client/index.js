import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import HistoryProvider from './App/Providers/HistoryProvider';
import './styles.css';
import Router from './routes';

const rootComponentRender = () =>
  render(
    <AppContainer>
      <HistoryProvider>
        <Router />
      </HistoryProvider>
    </AppContainer>,
    document.querySelector('#root')
  );

rootComponentRender();

module.hot.accept();
