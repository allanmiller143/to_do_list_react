import React from 'react';
import { useState } from 'react';
import Task from '../../components/Task/Task';
import './TaskList.css';
function TaskList() {
  const [todos] = useState([

    {
      id: 1,
      text: 'Criar funcionalidade de login',
      category: 'Trabalho',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Criar funcionalidade de cadastro',
      category: 'Estudos',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Criar funcionalidade de lista de tarefas',
      category: 'Estudos',
      isCompleted: false
    },
    {
      id: 4,
      text: 'Adicionar funcionalidade de lista de tarefas',
      category: 'Estudos',
      isCompleted: false
    },

  ]);

  return (
    <div className="task-list">
      <p className="task-list-title">Tarefas</p>
      <div className="task-list-divider">
        {todos.map((todo) => (
          <Task key={todo.id} data = {todo}/>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
