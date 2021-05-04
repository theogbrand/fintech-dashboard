"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var SearchForm = function () { return (<react_bootstrap_1.Form inline>
    <react_bootstrap_1.FormGroup controlId="formInlineEmail">
      <react_bootstrap_1.FormControl type="search" placeholder="enter something..."/>
    </react_bootstrap_1.FormGroup>{' '}
    <react_bootstrap_1.Button type="submit">search</react_bootstrap_1.Button>
  </react_bootstrap_1.Form>); };
exports.default = SearchForm;
