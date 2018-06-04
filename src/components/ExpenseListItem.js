import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount}</p>
    <p>{createdAt}</p>
  </div>
);

export default ExpenseListItem;
