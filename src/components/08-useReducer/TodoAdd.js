import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    handleAddTodo(newTodo);
    reset();
  }

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr/>
        <form onSubmit={ handleSubmit }>
          <input 
            type="text"
            name="description"
            className="form-control"
            autoComplete="off"
            placeholder="Aprender..."
            value={ description }
            onChange={ handleInputChange }
          ></input>
          <button
            type="submit" 
            className="btn btn-outline-primary mt-1 btn-block">
              Agregar
          </button>
        </form>
    </>
  )
}
