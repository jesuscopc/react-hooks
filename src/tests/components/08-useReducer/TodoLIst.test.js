import React from 'react';
const { shallow } = require("enzyme")
const { TodoList } = require("../../../components/08-useReducer/TodoList");
const { demoTodos } = require("../../fixtures/demoTodo");

describe('Sui Test <TodoLIst/>', () => {

  const handleToggle = jest.fn();
  const deleteTask = jest.fn();

  const wrapper =  shallow(
    <TodoList
      todos={ demoTodos }
      handleToggle={ handleToggle }
      deleteTask={ deleteTask }
    />);

  test('should be render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should be render 2 <TodoLIstItem/>', () => {
    const todoListItem = wrapper.find('TodoLIstItem');
    expect( todoListItem.length ).toBe( demoTodos.length );
    expect( todoListItem.at(0).prop('handleToggle') ).toEqual( expect.any(Function) );
  });
  
})
