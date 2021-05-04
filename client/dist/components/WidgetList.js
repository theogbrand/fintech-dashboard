"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Widget_1 = require("./Widget");
var WidgetList = function (props) {
    var data = props.data;
    var widgets = data.map(function (widget) { return (<react_bootstrap_1.Col key={widget.id}>
      <Widget_1.default title={widget.title} value={widget.value} key={widget.id}/>
    </react_bootstrap_1.Col>); });
    return (<div>
      <react_bootstrap_1.Container className="container pt-4 border border-white rounded rounded-sm mt-5 bg-white text-center">
        <h1>Expected returns</h1>
        <react_bootstrap_1.Row>{widgets}</react_bootstrap_1.Row>
      </react_bootstrap_1.Container>
    </div>);
};
exports.default = WidgetList;
