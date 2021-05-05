// import React, { Component } from 'react';
import * as React from "react";
// import { render } from "react-dom";

import { Container, Jumbotron } from 'react-bootstrap';
import NavBar from './components/NavBar';
import WidgetList from './components/WidgetList';
import CurrencyList from './components/CurrencyList';
import AssetTable from './components/AssetTable';

import axios from 'axios';


class App extends React.Component<any, any> {
// export default function App(props: any) {
  constructor(props: any) {
    super(props);
    this.state = {
      overview: [],
      currencies: [],
      us_equities: [],
      international_equities: [],
    };
  }

  callAPI() {
    axios
      .get('http://localhost:9000/testAPI')
      .then((res) => {
        this.setState({
          overview: res.data.data.overview,
          currencies: res.data.data.currencies,
          us_equities: res.data.data.us_equities,
          international_equities: res.data.data.international_equities,
        });
      })
      .catch((err) => {
        console.log('Error fetching and parsing data', err);
        console.log('there is an error here');
      });
  }

  componentDidMount() {
    this.callAPI(); 
  }

  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron>
           <Container>
             <h1>Best Bank</h1>
           </Container>
       </Jumbotron>
       <WidgetList data={this.state.overview} />
       <Container className="border border-white rounded rounded-sm bg-white my-3">
         <h1 className="text-center">My Portfolio</h1>
         <h3>Currencies</h3>
         <CurrencyList data={this.state.currencies} />
       </Container>
       <Container className="border border-white rounded rounded-sm bg-white my-3">
          <h1 className="text-center">Asset Allocation</h1>
         <AssetTable
            us_equities={this.state.us_equities}
            international_equities={this.state.international_equities}
          />
        </Container>
      </div>
    );
  }
}

export default App;
