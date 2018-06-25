import totalExpenses from '../../selectors/expenses-total';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const emptyArray = [];
  const expensesSum = totalExpenses(emptyArray);
  expect(expensesSum).toBe(0);
});

test('should correctly add up a single expense', () => {
  const expensesSum = totalExpenses([expenses[1]]);
  expect(expensesSum).toBe(expenses[1].amount);
});

test('should correctly add up multiple expenses', () => {
  const expensesSum = totalExpenses(expenses);
  expect(expensesSum).toBe(1990195);
});
