import React, { useContext } from 'react';
import './Order.css';
import AppContext from '../../context/AppContext';

function Order() {
  const { taskList, setTaskList,filteredTaskList, setFilteredTaskList } = useContext(AppContext);

  const handleTaskListAsc = () => {
    const sortedList = [...taskList].sort((a, b) => a.text.localeCompare(b.text)); // isso ordena por ordem alfabetica
    setTaskList(sortedList);
    const sortedFilteredList = [...filteredTaskList].sort((a, b) => a.text.localeCompare(b.text)); // caso tenho o filtro de completas ou imcompletas
    setFilteredTaskList(sortedFilteredList);
  };

  const handleTaskListDesc = () => {
    const sortedList = [...taskList].sort((a, b) => b.text.localeCompare(a.text)); // isso ordena por ordem alfabetica ao contrário
    setTaskList(sortedList);
    const sortedFilteredList = [...filteredTaskList].sort((a, b) => b.text.localeCompare(a.text)); // caso tenho o filtro de completas ou imcompletas
    setFilteredTaskList(sortedFilteredList);
  };

  return (
    <div className="order">
      <p className="order__title">Ordem alfabética</p>
      <div className="order__buttons">
        <button type="button" className="order__button" onClick={handleTaskListAsc}>
          Asc
        </button>
        <button type="button" className="order__button last" onClick={handleTaskListDesc}>
          Desc
        </button>
      </div>
    </div>
  );
}

export default Order;
