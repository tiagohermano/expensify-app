export default (expenses) => {
  return expenses.reduce((accum, { amount }) => accum + amount, 0);
};
