import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';
import '@testing-library/jest-dom';

describe('Sui Test useFetch', () => {
  
  test('should be return an object', () => {
    const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
  });

  test('should be have the info wished loading false, error false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
    await waitForNextUpdate();
    const { data, loading , error } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('should be manage the error', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2') );
    await waitForNextUpdate();
    const { data, loading , error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');
  });
  
  
})
