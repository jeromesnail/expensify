export default (expenses) => expenses.reduce((acc, { amount = 0 }) =>
  acc + (((typeof amount === typeof 1) && !isNaN(amount)) ? amount : 0), 0);