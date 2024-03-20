import React, { useContext, useState } from 'react';
import './InsertTask.css';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import AppContext from '../../context/AppContext';

function InsertTask() {
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Selecione'); // Inicialize o dropdownValue com um valor padrão, se necessário
  const {setNewTask, taskList, setTaskList} = useContext(AppContext);

  const itens = [ 
    { value: '0', label: 'Selecione' },
    { value: '1', label: 'Estudo' },
    { value: '2', label: 'Trabalho' },
    { value: '3', label: 'Lazer' }
  ];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedLabel = itens.find(item => item.value === selectedValue)?.label;
    setDropdownValue(selectedLabel);
  };

  const calculateTaskId = () => {
    // Obtém a lista de IDs das tarefas existentes
    const taskIds = taskList.map(task => task.id);
    
    // Verifica se a lista está vazia
    if (taskIds.length === 0) {
      return 1; // Se não houver tarefas, retorna 1 como o primeiro ID
    }
  
    // Encontra o maior ID na lista de IDs das tarefas
    const maxId = Math.max(...taskIds);
    
    // Retorna o próximo ID disponível (maior ID + 1)
    return maxId + 1;
  };
  



  const handleSubmit = () => {
    if(dropdownValue != 'Selecione' && inputValue != '') {
      const newTask = {
        id: calculateTaskId(),
        text: inputValue,
        category: dropdownValue,
        isCompleted: false
      };
      setNewTask(newTask);
      setTaskList([...taskList, newTask]);
      setDropdownValue('Selecione');
      setInputValue('');
    }
    else{
      alert('Preencha todos os campos');
    }
  };

  return (
    <div className="insert__task">
      <p className="insert__task__title">Adicionar Tarefa</p>
      <div className="select__task">
        <div className="insert__task__input__container">
          <p className="insert__task__label">Titulo da Tarefa</p>
          <input 
            type="text"
            placeholder="Insira o título da tarefa"
            className="insert__task__input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <DropDownMenu handleSelectChange={handleSelectChange} data={{ label: 'Tipo', itens: itens }}/>
      </div>
      <div>
        <button type="submit" className="insert__task__button" onClick={handleSubmit}>Adicionar</button>
      </div>
    </div>
  );
}

export default InsertTask;
