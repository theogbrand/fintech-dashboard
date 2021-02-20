import React from 'react';

const AssetRow = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.ticker}</td>
      <td>
        <div className="d-flex">
          <div className="progress-bar-title">{props.weight}</div>
        </div>
      </td>
    </tr>
  );
};

export default AssetRow;
