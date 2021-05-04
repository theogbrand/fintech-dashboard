"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var NavBar_1 = require("./components/NavBar");
var WidgetList_1 = require("./components/WidgetList");
var CurrencyList_1 = require("./components/CurrencyList");
var AssetTable_1 = require("./components/AssetTable");
var axios_1 = require("axios");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.state = {
            overview: [],
            currencies: [],
            us_equities: [],
            international_equities: [],
        };
        return _this;
    }
    App.prototype.callAPI = function () {
        var _this = this;
        axios_1.default
            .get('http://localhost:9000/testAPI')
            .then(function (res) {
            _this.setState({
                overview: res.data.data.overview,
                currencies: res.data.data.currencies,
                us_equities: res.data.data.us_equities,
                international_equities: res.data.data.international_equities,
            });
        })
            .catch(function (err) {
            console.log('Error fetching and parsing data', err);
            console.log('there is an error here');
        });
    };
    // TODO: checks for status
    App.prototype.componentDidMount = function () {
        this.callAPI();
    };
    App.prototype.render = function () {
        return (<div>
        <NavBar_1.default />
        <react_bootstrap_1.Jumbotron>
          <react_bootstrap_1.Container>
            <h1>Best Bank</h1>
          </react_bootstrap_1.Container>
        </react_bootstrap_1.Jumbotron>
        <WidgetList_1.default data={this.state.overview}/>
        <react_bootstrap_1.Container className="border border-white rounded rounded-sm bg-white my-3">
          <h1 className="text-center">My Portfolio</h1>
          <h3>Currencies</h3>
          <CurrencyList_1.default data={this.state.currencies}/>
        </react_bootstrap_1.Container>
        <react_bootstrap_1.Container className="border border-white rounded rounded-sm bg-white my-3">
          <h1 className="text-center">Asset Allocation</h1>
          <AssetTable_1.default us_equities={this.state.us_equities} international_equities={this.state.international_equities}/>
        </react_bootstrap_1.Container>
      </div>);
    };
    return App;
}(react_1.Component));
exports.default = App;
