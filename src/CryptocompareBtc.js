import React, { useState, useEffect } from "react";
// import logo from "./bitcoin-logo.png";


const CryptocompareBtc = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD")
      .then((res) => res.json())
      .then((data) => {        
        setPrice(data.USD); 
        setLoading(false);       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="btc">
      <h3>Cryptocompare Bitcoin Price</h3>
      <span className="btc-price">{loading ? "LOADING" : "$" + price}</span>      
    </div>
  );
};

export default CryptocompareBtc;