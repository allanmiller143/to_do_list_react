import React, { useContext, useEffect } from 'react';
import Task from '../../components/Task/Task';
import './TaskList.css';
import AppContext from '../../context/AppContext';

function TaskList() {
  const { taskList, setTaskList, setFilteredTaskList,filteredTaskList, dropdownFilterValue} = useContext(AppContext);
  
  useEffect(() => {
    const tasks = [
      {
        id: 1,
        text: 'Criar funcionalidade de login',
        category: 'Trabalho',
        isCompleted: false
      },
      {
        id: 2,
        text: 'Criar funcionalidade de cadastro',
        category: 'Estudo',
        isCompleted: false
      },
      {
        id: 3,
        text: 'Criar funcionalidade de lista de tarefas',
        category: 'Estudo',
        isCompleted: true
      },
      {
        id: 4,
        text: 'Adicionar funcionalidade de lista de tarefas',
        category: 'Estudo',
        isCompleted: false
      }
    ];

    setTaskList(tasks);
    setFilteredTaskList(tasks);
  }, []); // Deps vazia para garantir que o efeito seja executado apenas uma vez
  
  return (
    <div className="task-list">
      <p className="task-list-title">Tarefas</p>
      <div className="task-list-divider">

        {
          dropdownFilterValue === 'Todas' ?
            taskList.map(todo => (
              <Task key={todo.id} data={todo} />
            )) :
            filteredTaskList.map(todo => (
              <Task key={todo.id} data={todo} />
            ))
        }

        
      </div>
    </div>
  );
}

export default TaskList;
