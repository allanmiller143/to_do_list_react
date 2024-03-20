import React from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import {useState} from 'react';

function Provider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [dropdownFilterValue, setDropdownFilterValue] = useState('Todas');
  const [searchActivated, setsearchActivated] = useState(false);
  const [newTask, setNewTask] = useState({});

  const value = {
    newTask,
    setNewTask,
    taskList,
    setTaskList,
    filteredTaskList,
    setFilteredTaskList,
    dropdownFilterValue,
    setDropdownFilterValue,
    searchActivated,
    setsearchActivated
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
