import moment from 'moment';

// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = startDate ? startDate.isSameOrBefore(expense.createdAt) : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(expense.createdAt) :true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return b.createdAt.valueOf() - a.createdAt.valueOf();
    } else if (sortBy === 'amount') {
      return b.amount - a.amount;
    }
  });
};