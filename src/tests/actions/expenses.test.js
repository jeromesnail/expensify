import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses, { newExpense } from '../fixtures/expenses';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('shoul setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should setup edit expense action object', () => {
  const action = editExpense('az125r', { description: 'lol' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'az125r',
    updates: { description: 'lol' }
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  store.dispatch(addExpense(newExpense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...newExpense
      }
    }); 
    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(newExpense);
    done();
  }).catch((e) => {console.error(e);});
});