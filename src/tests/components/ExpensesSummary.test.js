import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummury';

test('should render correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={123} />)
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={123} />)
  expect(wrapper).toMatchSnapshot();
});