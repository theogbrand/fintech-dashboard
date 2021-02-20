import React from 'react';

import AssetRow from './AssetRow.js';

const AssetTable = (props) => {
  const US_data = props.us_equities;
  let US_Assets = US_data.map((asset, i) => (
    <AssetRow key={i} name={asset.name} ticker={asset.ticker} weight={asset.weight} />
  ));

  const International_data = props.international_equities;
  let Int_Assets = International_data.map((asset, i) => (
    <AssetRow key={i} name={asset.name} ticker={asset.ticker} weight={asset.weight} />
  ));

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Asset Name</th>
            <th scope="col">Ticker</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="table-active text-muted" colSpan="3">
              US Equities
            </th>
          </tr>
          {US_Assets}
          <tr>
            <th className="table-active text-muted" colSpan="3">
              International Equities
            </th>
          </tr>
          {Int_Assets}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
