import { useCouter } from '../../hooks/useCouter';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Suit Test useCounter', () => {
  
  test('should be return default values', () => {
    const { result } = renderHook( () => useCouter() );
    expect( result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('should be have the counter in 100', () => {
    const { result } = renderHook( () => useCouter(100) );
    expect( result.current.counter).toBe(100);
  });

  test('should be increment the counter in 1', () => {
    const { result } = renderHook( () => useCouter(100) );
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test('should be decrement the counter in 1', () => {
    const { result } = renderHook( () => useCouter(100) );
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test('should be reset the counter', () => {
    const { result } = renderHook( () => useCouter(100) );
    const { increment, reset } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(101);
    act(() => {
      reset();
    });
    const { counter: counter2 } = result.current;
    expect(counter2).toBe(100);
  });
  
})
