import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import totalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
  return (
    <div className='page-header'>
      <div className="content-container">
        <h1 className='page-header__title'>Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{numeral(props.expensesTotal/100).format('$0,0.00')}</span></h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
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
