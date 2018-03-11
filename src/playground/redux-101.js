import { createStore } from 'redux';

// Action generators, functions that return ction objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setTo }) => ({
  type: 'SET',
  setTo
});

const resetCount = () => ({ type: 'RESET' });

// Reducers
// 1. Reducers are pure functions
// 2. Never change the state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { count: state.count - action.decrementBy };
    case 'SET':
      return { count: action.setTo };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubcribe = store.subscribe(() => {
  console.log(store.getState());
});



// // Increment
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());


// Reset
// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(resetCount());

// Decrement
// store.dispatch({
//   type: 'DECREMENT'
// });

store.dispatch(decrementCount({ decrementBy: 5 }));

// Set
// store.dispatch({
//   type: 'SET',
//   count: 101
// });

store.dispatch(setCount({ setTo: 18 }));