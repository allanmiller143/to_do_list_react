import React, { useContext } from 'react';
import './Filter.css';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Order from '../Order/Order';
import AppContext from '../../context/AppContext';
function Filter() {
  const itens = [ { value: '0', label: 'Todas' }, { value: '1', label: 'Completas' }, { value: '2', label: 'Incompletas' }];

  const {taskList, setFilteredTaskList,setDropdownFilterValue} = useContext(AppContext);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedLabel = itens.find(item => item.value === selectedValue)?.label;
    setDropdownFilterValue(selectedLabel);

    setFilteredTaskList(taskList);

    if(selectedLabel != 'Todas'){
      const type = selectedLabel == 'Completas' ? true : false;
      const filteredList = taskList.filter(task => task.isCompleted == type);
      setFilteredTaskList(filteredList);
    }

  };

  return (
    <div className="filter">
      <h2 className="filter__title">Filtrar</h2>
      <div className="dropdown__itens">
        <DropDownMenu handleSelectChange = {handleSelectChange} data = {{label: 'Status', itens: itens}}/>
        <Order/>
      </div>
    </div>
  );
}

export default Filter;
