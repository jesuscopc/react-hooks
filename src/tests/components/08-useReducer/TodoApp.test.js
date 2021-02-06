import React from 'react';
import { demoTodos } from '../../fixtures/demoTodo';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';

describe('Sui Test <TodoApp/>', () => {
  const wrapper = shallow(<TodoApp/>);

  test('should be render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
})
