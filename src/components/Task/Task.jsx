import React from 'react';
import './Task.css';
import propTypes from 'prop-types';

function Task({data}) {
  const {text, category,isCompleted} = data;
  console.log(isCompleted);

  return(
    <div className="task">
      <div className="task__content">
        <p className="task__content__title">{text}</p>
        <p className="task__content__category">{category}</p>
      </div>
      <div className= "task__actions">
        <button className="task__actions__complete">completar</button>
        <button className="task__actions__delete">X</button>
      </div>
    </div>
  );
}
export default Task;

Task.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
