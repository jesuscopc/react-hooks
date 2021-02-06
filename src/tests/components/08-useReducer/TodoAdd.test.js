import React from 'react';
const { shallow } = require("enzyme");
const { TodoAdd } = require("../../../components/08-useReducer/TodoAdd");

describe('Suit Test <TodoAdd/>', () => {
  const handleAddTodo = jest.fn();
  const wrapper =shallow(
    <TodoAdd
      handleAddTodo={ handleAddTodo }
    />
  );

  test('should be render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should be not call handelAddTodo', () => {
    const form = wrapper.find('form').prop('onSubmit');
    form({ preventDefault(){} });
    expect( handleAddTodo ).toHaveBeenCalledTimes(0);
  })
  
  test('should be call function handleAddTodo', () => {
    const value = 'Aprender React';
    wrapper.find('input').simulate('change', 
    {
      target: {
        value,
        name: 'description'
      }
    });
    const form = wrapper.find('form').prop('onSubmit');
    form({ preventDefault(){} });
    expect( handleAddTodo ).toHaveBeenCalledTimes(1);
    expect( handleAddTodo ).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false, 
    });

    expect( wrapper.find('input').prop('value') ).toBe('');
  });
  
  
});
