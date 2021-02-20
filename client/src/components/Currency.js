import React from 'react';

const Currency = (props) => {
  return (
    <div id="currency" className="border-bottom media">
      <div className="media-body">{props.currency}</div>
      <div className="align-text-right">{props.proportion}%</div>
    </div>
  );
};

export default Currency;
