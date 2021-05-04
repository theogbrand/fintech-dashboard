"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var numberWidget = function (props) {
    return (<div>
        <div className="row text-success my-4">
          <div className="col-4">
            <h5 className="text-muted">{props.title}</h5>
            <h1 className="display-4">{props.value}</h1>
          </div>
        </div>
    </div>);
};
exports.default = numberWidget;
