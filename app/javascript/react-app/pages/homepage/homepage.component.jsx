import React from 'react';

import './homepage.styles.scss';

const Homepage = () => (
  <div className="homepage">
    <button className='btn-update-value'>Atualizar valor monetário</button>

    <div className="bitcoin-value">
      <h2>BTC</h2>    
      <input type="text" className='currency-value' />
    </div>

    <div className="currencies">
      <div className="currency-container">
        <h2>USD</h2>
        <div className="currency-value">
          <p>6000,00</p>
        </div>
      </div>

      <div className="currency-container">
        <h2>BRL</h2>
        <div className="currency-value">
          <p>6000,00</p>
        </div>
      </div>

      <div className="currency-container">
        <h2>EUR</h2>
        <div className="currency-value">
          <p>6000,00</p>
        </div>
      </div>

      <div className="currency-container">
        <h2>CAD</h2>
        <div className="currency-value">
          <p>6000,00</p>
        </div>
      </div>
    </div>

  </div>
);

export default Homepage;