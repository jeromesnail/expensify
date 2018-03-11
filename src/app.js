import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import moment from 'moment';

// console.log(moment("2018-02-28T23:00:00.000Z").isSameOrBefore("2018-02-28T23:00:00.000Z"));
// console.log(moment("2018-03-31T21:59:59.999Z").isSameOrAfter("2018-02-28T23:00:00.000Z"));


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));