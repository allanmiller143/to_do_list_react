import React, { useContext ,useState } from 'react';
import './Task.css';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function Task({data}) {
  const {text, category,isCompleted,id} = data;
  const {taskList, setTaskList,filteredTaskList,setFilteredTaskList} = useContext(AppContext);
  const [isExiting, setIsExiting] = useState(false); // Estado para controlar a animação de saída



  const handleRemoveTask = () => {
    setIsExiting(true); // Ativa a animação de saída ao remover a tarefa

    setTimeout(() => {
      const newTaskList = taskList.filter(task => task.id != id);
      setTaskList(newTaskList);  

      const newFilteresTaskList = filteredTaskList.filter(task => task.id != id);
      setFilteredTaskList(newFilteresTaskList); 
      
    },300);
    

  };

  const handleCompleteTask = () => {
    if (!isCompleted) {
      const updatedTaskList = taskList.map(task => {
        if (task.id === id) {
          return { ...task, isCompleted: true };
        } else {
          return task;
        }
      });

      setTaskList(updatedTaskList);

      // Verifica se a tarefa também está na lista filtrada e a marca como completa se estiver
      const updatedFilteredTaskList = filteredTaskList.map(task => {
        if (task.id === id) {
          return { ...task, isCompleted: true };
        } else {
          return task;
        }
      });
      setFilteredTaskList(updatedFilteredTaskList);
    }
  };

  return(
    <div className={`task ${isExiting ? 'task-exit' : ''}`}>
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
