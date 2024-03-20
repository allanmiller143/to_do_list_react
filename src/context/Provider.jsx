import React from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import {useState} from 'react';

function Provider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [dropdownFilterValue, setDropdownFilterValue] = useState('Todas');
  const [newTask, setNewTask] = useState({});

  const value = {
    newTask,
    setNewTask,
    taskList,
    setTaskList,
    filteredTaskList,
    setFilteredTaskList,
    dropdownFilterValue,
    setDropdownFilterValue
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
