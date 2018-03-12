import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY', sortBy: 'amount' })
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    stratDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY', sortBy: 'date' })
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'This is the text filter.'
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text});
  expect(state.text).toBe(text);
});

test('should set start date filter', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
  expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
  expect(state.endDate).toBe(endDate);
});