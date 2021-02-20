import React from 'react';
import './CurrencyList.css'
import Currency from './Currency';

const CurrencyList = (props) => {
  const data = props.data;
  let currencies = data.map((currency) => (
    <Currency currency={currency.currency} proportion={currency.proportion} key={currency.id}/>
  ));
  return (
    <div id='currencies'>{currencies}</div>
  );
};

export default CurrencyList;
