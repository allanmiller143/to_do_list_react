import React, { useContext } from 'react';
import './Task.css';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function Task({data}) {
  const {text, category,isCompleted,id} = data;
  const {taskList, setTaskList} = useContext(AppContext);
  console.log(isCompleted);

  const handleRemoveTask = () => {
    const newTaskList = taskList.filter(task => task.id != id);
    setTaskList(newTaskList);  
  };

  const handleCompleteTask = () => {
    if (!isCompleted) {
      const updatedTaskList = taskList.map(task => {
        if (task.id === id) {
          return { ...task, isCompleted: true }; // Criar uma cópia da tarefa com isCompleted alterado
        } else {
          return task; // Retornar a tarefa sem alterações
        }
      });
  
      setTaskList(updatedTaskList); // Atualizar o estado com o
    }
  };
  return(
    <div className="task">
      <div className="task__content">
        <p className = { `task__content__title ${isCompleted ? 'completed' : ''}`}>{text}</p>
        <p className="task__content__category">{category}</p>
      </div>
      <div className= "task__actions">
        <button className="task__actions__complete" onClick={handleCompleteTask}>completar</button>
        <button className="task__actions__delete" onClick={handleRemoveTask}>X</button>
      </div>
    </div>
  );
}
export default Task;

Task.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
