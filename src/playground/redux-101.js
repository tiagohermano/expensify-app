import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
      break;
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
      break;
    case 'RESET':
      return {
        count: 0
      };
      break;
    default:
      return state;
  }
});

console.log(store.getState());

store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
  type: 'RESET'
});

console.log(store.getState());
