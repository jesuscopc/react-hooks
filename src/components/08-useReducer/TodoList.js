import React from 'react';
import { TodoLIstItem } from './TodoLIstItem';

export const TodoList = ( {todos, handleToggle, deleteTask } ) => {
  return (
    <ol className="list-group list-group-flush">
      { 
        todos.map( (task, i) => (
          <TodoLIstItem
            key={task.id}
            task={task}
            i={i}
            handleToggle={handleToggle}
            deleteTask={deleteTask} 
          />
        ))
      }
    </ol>
  )
}
