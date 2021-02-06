import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodo';

describe('Sui test todoReducer', () => {

  test('should be return the state by default', () => {
    const state = todoReducer(demoTodos, {});
    expect( state ).toEqual(demoTodos);
  });
  
  test('should be add a todo', () => {
    const action = {
      type: 'add',
      payload: {
        id:3,
        description: 'Aprender Mongo',
        done: false
      }
    }
    const state = todoReducer(demoTodos, action);
    expect( state ).toEqual([...demoTodos, action.payload]);
  });

  test('should be remove a todo', () => {
    const action = {
      type: 'delete',
      payload: 1
    }
    const state = todoReducer(demoTodos, action);
    expect( state.length ).toBe(1);
  });

  test('should be toggle todo', () => {
    const action = {
      type: 'toggle',
      payload: 1
    };
    const state = todoReducer(demoTodos, action);
    expect( state[0].done ).toBe( true );
    expect( state[1] ).toEqual( demoTodos[1]);
  });
  
    
});
