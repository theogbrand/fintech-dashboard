"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AssetRow = function (props) {
    return (<tr>
      <td>{props.name}</td>
      <td>{props.ticker}</td>
      <td>
        <div className="d-flex">
          <div className="progress-bar-title">{props.weight}</div>
        </div>
      </td>
    </tr>);
};
exports.default = AssetRow;
