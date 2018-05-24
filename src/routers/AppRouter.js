import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/Homepage';
import PortfolioPage from '../components/PortfolioPage';
import WorkDetails from '../components/WorkDetails';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/portfolio" component={PortfolioPage} exact/>
        <Route path="/portfolio/:id" component={WorkDetails} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
