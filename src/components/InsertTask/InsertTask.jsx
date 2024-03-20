import React from 'react';
import './InsertTask.css';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

function InsertTask() {
  return (
    <div className="insert__task">
      <p className="insert__task__title">Adicionar Tarefa</p>
      <div className="select__task">
        <div className="insert__task__input__container">
          <p className="insert__task__label">Titulo da Tarefa</p>
          <input type="text" placeholder="Insira o título da tarefa" className="insert__task__input" />
        </div>
        <DropDownMenu data = {{label: 'Tipo', itens: [ { value: '1', label: 'Estudo' }, { value: '2', label: 'Trabalho' }, { value: '3', label: 'Lazer' }]}}/>
      </div>
      <div>
        <button type="submit" className="insert__task__button">Adicionar</button>
      </div>
    </div>
  );
}

export default InsertTask;
