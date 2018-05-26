import { createStore, combineReducers } from 'redux';


// EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {

      }
    case 'EDIT_EXPENSE':
      return {

      }
    case 'REMOVE_EXPENSE':
      return {

      }
    default:
      return state;
  }
};

// FILTER REDUCER
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'assoidjsai',
    description: 'January Rent',
    note: 'This was the final payment for this address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //amount or date
    startDate: undefined,
    endDate: undefined
  }
};
