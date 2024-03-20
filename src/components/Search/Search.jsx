import React from 'react';
import './Search.css';
import { CiSearch } from 'react-icons/ci';

function Search() {
  return (
    <div className="search">
      <h1 className="search__title">Pesquisar</h1>
      <div className="search__container">
        <input type="text" placeholder="Pesquisar" className="search__input" />
        <button type="submit" className="search__button"><CiSearch/></button>
      </div>
    </div>
  );
}

export default Search;
