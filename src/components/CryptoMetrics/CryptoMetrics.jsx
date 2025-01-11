import React from 'react';
import { InfoIcon } from 'lucide-react';
import './CryptoMetrics.css';

const CryptoMetrics = () => {
  return (
    <div className="metrics-container">
      {/* Performance Section */}
      <section className="performance-section">
        <h2>Performance</h2>
        
        <div className="price-range">
          <div className="range-labels">
            <div className="label">
              <span>Today's Low</span>
              <span>46,930.22</span>
            </div>
            <div className="label">
              <span>Today's High</span>
              <span>49,343.83</span>
            </div>
          </div>
          <div className="range-bar">
            <div className="gradient-bar"></div>
            <div className="pointer" style={{ left: '65%' }}>
              <div className="pointer-value">$48,637.83</div>
            </div>
          </div>
        </div>

        <div className="price-range">
          <div className="range-labels">
            <div className="label">
              <span>52W Low</span>
              <span>16,930.22</span>
            </div>
            <div className="label">
              <span>52W High</span>
              <span>49,743.83</span>
            </div>
          </div>
          <div className="range-bar">
            <div className="gradient-bar"></div>
            <div className="pointer" style={{ left: '75%' }}>
              <div className="pointer-value">$48,637.83</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundamentals Section */}
      <section className="fundamentals-section">
        <div className="section-header">
          <h2>Fundamentals</h2>
          <InfoIcon size={20} className="info-icon" />
        </div>

        <div className="fundamentals-grid">
          <div className="metric">
            <span className="metric-label">Bitcoin Price</span>
            <span className="metric-value">$16,815.46</span>
          </div>
          
          <div className="metric">
            <span className="metric-label">Market Cap</span>
            <span className="metric-value">$323,507,290,047</span>
          </div>

          <div className="metric">
            <span className="metric-label">24h Low / 24h High</span>
            <span className="metric-value">$16,382.07 / $16,874.12</span>
          </div>

          <div className="metric">
            <span className="metric-label">Market Cap Dominance</span>
            <span className="metric-value">38.343%</span>
          </div>

          <div className="metric">
            <span className="metric-label">7d Low / 7d High</span>
            <span className="metric-value">$16,382.07 / $16,874.12</span>
          </div>

          <div className="metric">
            <span className="metric-label">Volume / Market Cap</span>
            <span className="metric-value">0.0718</span>
          </div>

          <div className="metric">
            <span className="metric-label">Trading Volume</span>
            <span className="metric-value">$23,249,202,782</span>
          </div>

          <div className="metric">
            <span className="metric-label">All-Time High</span>
            <div className="metric-value">
              <div>$69,044.77 <span className="negative">-75.6%</span></div>
              <div className="date">Nov 10, 2021 (about 1 year)</div>
            </div>
          </div>

          <div className="metric">
            <span className="metric-label">Market Cap Rank</span>
            <span className="metric-value">#1</span>
          </div>

          <div className="metric">
            <span className="metric-label">All-Time Low</span>
            <div className="metric-value">
              <div>$67.81 <span className="positive">24729.1%</span></div>
              <div className="date">Jul 06, 2013 (over 9 years)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoMetrics;

