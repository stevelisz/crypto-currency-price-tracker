import React, { useState, useEffect } from "react";
// import logo from "./bitcoin-logo.png";


const CoinLayerBtc = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinbase.com/v2/prices/spot?currency=USD")
      .then((res) => res.json())
      .then((data) => {        
        setPrice(data.data.amount); 
        setLoading(false);       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="btc">
      <h3>Coinbase Bitcoin Price</h3>
      <span className="btc-price">{loading ? "LOADING" : "$" + price}</span>      
    </div>
  );
};

export default CoinLayerBtc;