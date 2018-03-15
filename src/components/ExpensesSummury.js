import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const s = expensesCount === 1 ? '' : 's';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header__title">Viewing <span>{expensesCount}</span> expense{s} totalling <span>{formattedExpensesTotal}</span>.</h1>
        <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({ expenses, filters }) => ({
  expensesCount: selectExpenses(expenses, filters).length,
  expensesTotal: selectExpensesTotal(selectExpenses(expenses, filters))
});

export default connect(mapStateToProps)(ExpensesSummary);