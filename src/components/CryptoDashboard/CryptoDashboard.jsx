import React from 'react';
import TradingViewWidget from './TradingViewWidget';
import { ArrowRight, ArrowUp } from 'lucide-react';
import './CryptoDashboard.css';

const CryptoDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="price-header">
          <div className="coin-info">
            <img 
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" 
              alt="Bitcoin" 
              className="coin-logo"
            />
            <h1>Bitcoin <span className="coin-symbol">BTC</span></h1>
            <span className="rank">Rank #1</span>
          </div>
          <div className="price-info">
            <div className="current-price">
              <h2>$46,953.04</h2>
              <span className="price-change positive">
                <ArrowUp size={20} />
                2.51%
              </span>
              <span className="time-period">(24H)</span>
            </div>
            <div className="price-inr">₹ 39,42,343</div>
          </div>
        </div>

        <div className="chart-container">
          {/* <div className="chart-header">
            <span>Bitcoin Price Chart (USD)</span>
            <div className="time-filters">
              <button className="time-button">1H</button>
              <button className="time-button active">24H</button>
              <button className="time-button">7D</button>
              <button className="time-button">1M</button>
              <button className="time-button">3M</button>
              <button className="time-button">6M</button>
              <button className="time-button">1Y</button>
              <button className="time-button">ALL</button>
            </div>
          </div> */}
          <div className="chart">
            <TradingViewWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDashboard;

