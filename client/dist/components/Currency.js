"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var react_1 = require("react");

var Currency = function (props) {
    return (<div id="currency" className="border-bottom media">
      <div className="media-body">{props.currency}</div>
      <div className="align-text-right">{props.proportion}%</div>
    </div>);
};
exports.default = Currency;
