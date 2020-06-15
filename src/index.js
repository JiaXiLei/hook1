import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Router from '@/routes'
import { Provider } from 'react-redux'
import { store } from './store'


ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
