import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
  <div>
    This is my Expense Dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my Add Expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is my Edit Expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is my Help component
  </div>
);

const NotFoundPage = () => (
  <div>
    404
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboard} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
