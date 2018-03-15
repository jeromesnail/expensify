import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} />);
});

test('should render AssExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle addExpence', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});