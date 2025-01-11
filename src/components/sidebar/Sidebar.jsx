import { ArrowRight, ArrowUp } from 'lucide-react'
import React from 'react'
import frame from "../../assets/Frame1.png"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="get-started-card">
          <h2>Get Started with KoinX for FREE</h2>
          <p>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
          <img 
            src={frame} 
            alt="KoinX Features" 
            className="feature-image"
          />
          <button className="get-started-button">
            Get Started for FREE <ArrowRight size={20} />
          </button>
        </div>

        <div className="trending-section">
          <h3>Trending Coins (24h)</h3>
          <div className="trending-coins">
            <div className="trend-item">
              <div className="coin-name">
                <img 
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
                  alt="Ethereum" 
                />
                <span>Ethereum (ETH)</span>
              </div>
              <span className="price-change positive">
                <ArrowUp size={16} />
                8.21%
              </span>
            </div>
            <div className="trend-item">
              <div className="coin-name">
                <img 
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" 
                  alt="Bitcoin" 
                />
                <span>Bitcoin (BTC)</span>
              </div>
              <span className="price-change positive">
                <ArrowUp size={16} />
                5.26%
              </span>
            </div>
            <div className="trend-item">
              <div className="coin-name">
                <img 
                  src="https://cryptologos.cc/logos/polygon-matic-logo.png" 
                  alt="Polygon" 
                />
                <span>Polygon (MATIC)</span>
              </div>
              <span className="price-change positive">
                <ArrowUp size={16} />
                4.32%
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sidebar
