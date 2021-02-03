import React from 'react';

export const TodoLIstItem = ({ task, i, handleToggle, deleteTask}) => {
  return (
    <li 
      key={task}
      className="list-group-item"
    >
      <p
        className={ `${ task.done && 'complete' }`}
        onClick={ () => handleToggle(task.id)}
      >{i + 1} { task.desc }</p>
      <button 
        className="btn btn-danger"
        onClick={ () => deleteTask(task.id) }
        >
        Borrar
      </button>
    </li> 
  )
}
