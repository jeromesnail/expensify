import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '2' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove any expense if not known id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '5' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
const expense = {
  id: 'some id',
  description: 'some description',
  amount: '123456',
  createdAt: 9876543210,
  note:'some note'
}
const action = { type: 'ADD_EXPENSE', expense };
const state = expensesReducer(expenses, action);
expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense given its id', () => {
  const updates = { description: 'new description', note: 'corrected note' };
  const action = { type: 'EDIT_EXPENSE', id: '2', updates };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({ ...expenses[1], ...updates});
});

test('should  not edit an expense if id not found', () => {
  const updates = { description: 'new description', note: 'corrected note' };
  const action = { type: 'EDIT_EXPENSE', id: '5', updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
