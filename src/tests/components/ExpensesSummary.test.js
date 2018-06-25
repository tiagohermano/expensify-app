import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { addExpense } from '../../actions/expenses';

test('should correctly render Expenses Summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={4563}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render Expenses Summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={9} expensesTotal={4563456}/>);
  expect(wrapper).toMatchSnapshot();
});
