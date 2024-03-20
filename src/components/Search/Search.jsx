import React, { useState, useContext } from 'react';
import './Search.css';
import { CiSearch } from 'react-icons/ci';
import AppContext from '../../context/AppContext';

function Search() {
  const { taskList, setFilteredTaskList, setsearchActivated } = useContext(AppContext);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search === '') {
      setsearchActivated(false);
      setFilteredTaskList(taskList); // Restaura a lista original
    } else {
      setFilteredTaskList(
        taskList.filter(task =>
          task.text.toLowerCase().includes(search.toLowerCase())
        )
      );
      setsearchActivated(true);
    }
    setSearch('');
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    setsearchActivated(event.target.value !== '');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Chama a função handleSearch ao pressionar Enter
    }
  };

  return (
    <div className="search">
      <h1 className="search__title">Pesquisar</h1>
      <div className="search__container">
        <input
          type="text"
          placeholder="Pesquisar"
          className="search__input"
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Adiciona o evento onKeyDown aqui
        />
        <button type="submit" className="search__button" onClick={handleSearch}>
          <CiSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
