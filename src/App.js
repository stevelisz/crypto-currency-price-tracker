import CryptocompareBtc from './CryptocompareBtc';
import CryptocompareEth from './CryptocompareEth';
import CoinLayerBtc from './CoinLayerBtc';
import CoinLayerEth from './CoinLayerEth';
import PriceCompare from './PriceCompare';
import './App.css';
import btclogo from "./bitcoin-logo.png";
import ethlogo from "./eth-logo.png";
function App() {
  function refreshPage() {
    window.location.reload();
  }
  
  return (
    <div className="App">
      <div>
      <img className="photo" src={btclogo} alt="btc logo"/>
      </div>
      <CryptocompareBtc />
      <CoinLayerBtc />
      <div>
      <img className="photo" src={ethlogo} alt="eth logo"/>
      </div>
      <CryptocompareEth />
      <CoinLayerEth />
      {' '}
      <PriceCompare />
      <div>
        
      </div>
      <button onClick={refreshPage}>Refresh</button>
    </div>
  );
}

export default App;