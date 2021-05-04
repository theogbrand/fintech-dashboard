"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./CurrencyList.css");
var Currency_1 = require("./Currency");
var CurrencyList = function (props) {
    var data = props.data;
    var currencies = data.map(function (currency) { return (<Currency_1.default currency={currency.currency} proportion={currency.proportion} key={currency.id}/>); });
    return (<div id='currencies'>{currencies}</div>);
};
exports.default = CurrencyList;
