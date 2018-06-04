import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount: 100 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 200 }));
store.dispatch(setTextFilter('water'));

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
