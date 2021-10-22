import React, { useState, useEffect } from "react";
// import logo from "./bitcoin-logo.png";


const CoinLayerEth = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
      .then((res) => res.json())
      .then((data) => {        
        setPrice(data.data.rates.USD); 
        setLoading(false);       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="btc">
      <h3>Coinbase Ethereum Price</h3>
      <span className="btc-price">{loading ? "LOADING" : "$" + price}</span>      
    </div>
  );
};

export default CoinLayerEth;