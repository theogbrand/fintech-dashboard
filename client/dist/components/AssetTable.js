"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AssetRow_js_1 = require("./AssetRow.js");
var AssetTable = function (props) {
    var US_data = props.us_equities;
    var US_Assets = US_data.map(function (asset, i) { return (<AssetRow_js_1.default key={i} name={asset.name} ticker={asset.ticker} weight={asset.weight}/>); });
    var International_data = props.international_equities;
    var Int_Assets = International_data.map(function (asset, i) { return (<AssetRow_js_1.default key={i} name={asset.name} ticker={asset.ticker} weight={asset.weight}/>); });
    return (<div>
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
    </div>);
};
exports.default = AssetTable;
