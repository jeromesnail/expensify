import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, setExpenses } from '../../actions/expenses';
import expenses, { newExpense } from '../fixtures/expenses';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const uid = 'some-uid';
const defaultAuthState = { auth: { uid } };

const expensesData = expenses.reduce((obj, { id, description, note, amount, createdAt }) => {
  obj[id] = { description, note, amount, createdAt };
  return obj
}, {});

beforeEach((done) => {
  db.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(addExpense(newExpense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...newExpense
      }
    });
    return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(newExpense);
    done();
  }).catch((e) => { console.error(e); });
});

test('should remove expense from database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  store.dispatch(removeExpense(id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'REMOVE_EXPENSE', id });
    return db.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  }).catch((e) => { console.error(e); });
});

test('should fetch the expenses from database', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(setExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'SET_EXPENSES', expenses });
    done();
  });
});

test('should edit expenses on database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const updates = { description: 'new description', note: 'corrected note' };
  const id = expenses[1].id;
  store.dispatch(editExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'EDIT_EXPENSE', id, updates });
    return db.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    const newExpense = {
      id: snapshot.key,
      ...snapshot.val()
    }
    expect(newExpense).toEqual({ ...expenses[1], ...updates });
    done();
  }).catch((e) => { console.error(e); })
});