import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the things i did</p>
    <Link to="/item/1">Item One</Link>
    <Link to="/item/2">Item Two</Link>
  </div>
);

export default PortfolioPage;
