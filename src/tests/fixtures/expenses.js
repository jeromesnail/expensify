import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'Gas Bill',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'rEnt bill',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

const newExpense = {
  description: 'test new expense',
  note: 'this is a new expense without id',
  amount: 36900,
  createdAt: moment(0).add(56, 'years').valueOf()
};

export { expenses as default, newExpense};