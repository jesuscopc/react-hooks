import React from 'react';
import { demoTodos } from '../../fixtures/demoTodo';
const { shallow } = require("enzyme")
const { TodoLIstItem } = require("../../../components/08-useReducer/TodoLIstItem")

describe('SUi test <TodoListItem/>', () => {
  const deleteTask = jest.fn();
  const handleToggle = jest.fn();
  const wrapper =  shallow(
    <TodoLIstItem
      task={ demoTodos[0] }
      i={ 0 }
      handleToggle={ handleToggle }
      deleteTask={ deleteTask }
    />);
  
  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be call function deleteTask', () => {
    wrapper.find('button').simulate('click');
    expect( deleteTask ).toHaveBeenCalledTimes(1);
    expect( deleteTask ).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('should be call function handleToggle', () => {
    wrapper.find('p').simulate('click');
    expect( handleToggle ).toHaveBeenCalledTimes(1);
    expect( handleToggle ).toHaveBeenCalledTimes( demoTodos[0].id );
  });
  
  test('should be show the text correctly', () => {
    expect( wrapper.find('p').text()).toBe(`1 ${ demoTodos[0].desc }`);
  });

  test('should be have the class complete if TODO.done === true', () => {
    const todo =  demoTodos[0];
    todo.done = true;
    const wrapper =  shallow(
      <TodoLIstItem
        task={ todo }
        i={ 0 }
        handleToggle={ handleToggle }
        deleteTask={ deleteTask }
      />);
    expect( wrapper.find('p').hasClass('complete')).toBeTruthy();
  })
  
  
})
