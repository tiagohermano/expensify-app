import React from 'react';
import { connect } from 'react-redux';
import totalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h1>Viewing {props.expensesCount} {expenseWord} totalling {numeral(props.expensesTotal/100).format('$0,0.00')}</h1>
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesTotal: totalExpenses(visibleExpenses),
    expensesCount: visibleExpenses.length
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
