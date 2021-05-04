"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Results = function () {
    return (<react_bootstrap_1.Container>
      <h2>Results List</h2>
      <react_bootstrap_1.ListGroup>
        <react_bootstrap_1.ListGroupItem href="#" active>
          Link 1
        </react_bootstrap_1.ListGroupItem>
        <react_bootstrap_1.ListGroupItem href="#">Link 2</react_bootstrap_1.ListGroupItem>
        <react_bootstrap_1.ListGroupItem href="#" disabled>
          Link 3
        </react_bootstrap_1.ListGroupItem>
      </react_bootstrap_1.ListGroup>
    </react_bootstrap_1.Container>);
};
exports.default = Results;
