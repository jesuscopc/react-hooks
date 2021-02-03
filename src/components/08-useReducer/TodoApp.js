import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './todo.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {
  const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
  };
  
  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const deleteTask = (id) => {
    const action = {
      type: 'delete',
      payload: id
    }
    dispatch(action);
  };

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

  return (
    <div>
      <h1>TodoApp ( { todos.length } )</h1>
      <div className="row">
          <div className="col-7">
            todos
            <TodoList
              todos={todos}
              handleToggle={handleToggle}
              deleteTask={deleteTask} 
            />
          </div>
          <div className="col-5">
            <TodoAdd
              handelAddTodo={ handleAddTodo } 
            />
          </div>
      </div>
    </div>
  )
}
