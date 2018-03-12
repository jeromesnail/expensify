import { setTextFilter, sortBy, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should return set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should return set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should return sort by date or amount object according to argument', () => {
  const action = sortBy('date');
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: 'date'
  });
});

test('should return set text filter object according to argument', () => {
  const text = 'This is a text filter'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should return set text filter object by default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});