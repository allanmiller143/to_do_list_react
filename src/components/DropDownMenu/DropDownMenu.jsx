import React from 'react';
import './DropDownMenu.css';
import propTypes from 'prop-types';

function DropDownMenu({ data }) {
  const { label, itens } = data;

  return (
    <div className="dropDownMenu">
      <label htmlFor="dropdown" className="form-label">{label}</label>
      <select id="dropdown" className="form-select">
        {itens.map(item => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDownMenu;

DropDownMenu.propTypes = {
  data : propTypes.shape({}),
}.isRequired;
