import React from 'react';
import './Tokenomics.css';

const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <h1 className="tokenomics-title">Tokenomics</h1>
      
      <h2 className="distribution-title">Initial Distribution</h2>
      
      <div className="chart-container3">
        <div className="donut-chart"></div>
        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot crowdsale"></span>
            <span>Crowdsale investors: 80%</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot foundation"></span>
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>

      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. 
        Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. 
        Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. 
        Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. 
        Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;

