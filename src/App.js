import CryptocompareBtc from './CryptocompareBtc';
import CryptocompareEth from './CryptocompareEth';
import CoinLayerBtc from './CoinLayerBtc';
import CoinLayerEth from './CoinLayerEth';
import PriceCompare from './PriceCompare';
import './App.css';

function App() {
  function refreshPage() {
    window.location.reload();
  }
  
  return (
    <div className="App">
      <CryptocompareBtc />
      <CoinLayerBtc />
      <CryptocompareEth />
      <CoinLayerEth />
      <PriceCompare />
      <div>
        
      </div>
      <button color="black" onClick={refreshPage}>Refresh</button>
    </div>
  );
}

export default App;