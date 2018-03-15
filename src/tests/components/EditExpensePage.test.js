import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      expense={expenses[2]}
    />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[0]);
});

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith((expenses[2].id));
});