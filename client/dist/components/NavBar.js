"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var NavBar = function () {
    return (<react_bootstrap_1.Navbar bg="dark" variant="dark">
      <react_bootstrap_1.Navbar.Brand href="#home">
        <img alt="logo" src="https://cdn-images-1.medium.com/max/1200/1*Qb6G2Cm7A7DKywWC8vob4A.png" width="30" height="30" className="d-inline-block align-top"/>{' '}
        BDB Bank
      </react_bootstrap_1.Navbar.Brand>
      <react_bootstrap_1.Nav.Link href="#support" className="">
        Support
      </react_bootstrap_1.Nav.Link>
      <react_bootstrap_1.Nav.Link href="#logout">Logout</react_bootstrap_1.Nav.Link>
    </react_bootstrap_1.Navbar>);
};
exports.default = NavBar;
