import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const sum = selectExpensesTotal([]);
  expect(sum).toBe(0);
});

test('should correctly add up a single expense', () => {
  const sum = selectExpensesTotal([expenses[1]]);
  expect(sum).toBe(109500);
});

test('should correctly add up multiple expenses', () => {
  const sum = selectExpensesTotal(expenses);
  expect(sum).toBe(114195);
});

//edge cases => shouldn't happen if amount is (correctly) defined
test('should correctly add up multiple expenses even if amount is not defined', () => {
  const sum = selectExpensesTotal([{}, { amount: 123 }]);
  expect(sum).toBe(123);
});

test('should correctly add up multiple expenses even if amount is not a number', () => {
  const sum = selectExpensesTotal([{ amount: 'this in not a number' }, { amount: 123 }]);
  expect(sum).toBe(123);
});

test('should correctly add up multiple expenses even if amount is NaN', () => {
  const sum = selectExpensesTotal([{ amount: NaN }, { amount: 123 }]);
  expect(sum).toBe(123);
});