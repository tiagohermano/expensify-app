import React from 'react';

const WorkDetails = (props) => (
  <div>
    <h1>A Things i've done</h1>
    <p>This page is for the item with id of {props.match.params.id}</p>
  </div>
);

export default WorkDetails;
