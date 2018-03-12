import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const s = expensesCount === 1 ? '' : 's';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
  <div>
    <p>Viewing {expensesCount} expense{s} totalling {formattedExpensesTotal}.</p>
  </div>
)};

const mapStateToProps = ({ expenses, filters }) => ({
  expensesCount: selectExpenses(expenses, filters).length,
  expensesTotal: selectExpensesTotal(selectExpenses(expenses, filters))
});

export default connect(mapStateToProps)(ExpensesSummary);