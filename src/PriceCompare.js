import React, { useState, useEffect } from "react";
// import logo from "./bitcoin-logo.png";


const PriceCompare = () => {
  const [WhereBTC, setBTCName] = useState(null);
  const [WhereETH, setETHName] = useState(null);
  const [WhereSellBTC, setsellBTC] = useState(null);
  const [WhereSellETH, setsellETH] = useState(null);
  const urls = ["http://api.coinlayer.com/api/live?access_key=7909ef414546b1a00cce0cecf7adcc9a&symbols=%20BTC,ETH", "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD","https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD"]

  Promise.all([
    fetch("https://api.coinbase.com/v2/prices/spot?currency=USD"), 
    fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH"), 
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD"),
    fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD")
  ]).then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function (data) {
    // data[0] BTC data.data.amount
    // data[1] ETH data.data.rates.USD
    // data[2] compare BTC .USD
    // data[3] compare ETH .USD
    // You would do something with both sets of data here
    //console.log(data[3]);
    if(parseFloat(data[0].data.amount) < parseFloat(data[2].USD)){
      setBTCName('Coinbase')
      setsellBTC('CryptoCompare')
    }
    if(parseFloat(data[0].data.amount) > parseFloat(data[2].USD)){
      setBTCName('CryptoCompare')
      setsellBTC('Coinbase')
    }
    if(parseFloat(data[0].data.amount) == parseFloat(data[2].USD)){
      setBTCName('You can purchase or sell on both platforms since the price is the same.')
    }
    if(parseFloat(data[1].data.rates.USD) < parseFloat(data[3].USD)){
      setETHName('Coinbase')
      setsellETH('CryptoCompare')
    }
    if(parseFloat(data[1].data.rates.USD) > parseFloat(data[3].USD)){
      setETHName('CryptoCompare')
      setsellETH('Coinbase')
    }
    if(parseFloat(data[1].data.rates.USD) == parseFloat(data[3].USD)){
      setETHName('You can purchase or sell on both platforms since the price is the same.')
    }
    
  }).catch(function (error) {
    // if there's an error, log it
    console.log(error);
  });



  return (
    <div className="btc">
      <h3>Where to buy BTC at the moment?</h3>
      <span className="btc-where">{WhereBTC}</span> 
      <h3>Where to sell BTC at the moment?</h3>
      <span className="btc-where">{WhereSellBTC}</span> 
      <h3>Where to buy ETH at the moment?</h3>
      <span className="eth-where">{WhereETH}</span>
      <h3>Where to sell ETH at the moment?</h3>
      <span className="eth-where">{WhereSellETH}</span>     
    </div>
    
  );
};

export default PriceCompare;