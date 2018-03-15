import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
  };

  onClick = () => {
    this.props.removeExpense(this.props.expense.id);
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button
          className="button button--secondary"
            onClick={this.onClick}
          >Remove Expense</button>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense(id))
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);