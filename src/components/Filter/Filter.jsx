import React from 'react';
import './Filter.css';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Order from '../Order/Order';
function Filter() {
  return (
    <div className="filter">
      <h2 className="filter__title">Filtrar</h2>
      <div className="dropdown__itens">
        <DropDownMenu data = {{label: 'Status', itens: [ { value: '1', label: 'Todas' }, { value: '2', label: 'Completas' }, { value: '3', label: 'Incompletas' }]}}/>
        <Order/>
      </div>
      
    </div>
  );
}

export default Filter;
