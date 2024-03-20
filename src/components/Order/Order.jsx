import React from 'react';
import './Order.css';
function Order() {
  return (
    <div className="order">
      <p className="order__title">Ordem alfabética</p>
      <div className="order__buttons">
        <button type="button" className="order__button">Asc </button>
        <button type="button" className="order__button last">Desc</button>

      </div>
    </div>);
}

export default Order;
