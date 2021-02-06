import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Suit Test useForm', () => {
  const initialForm = {
    name: 'jesus',
    email: 'jesus@gmail.com'
  };

  test('should return the default form', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    const [ values, handleInputChange, reset ] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should be change value form name', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    const data = {
      target: {
        name: 'name',
        value: 'otherValue'
      }
    };
    const [ , handleInputChange ] = result.current;
    act(() => {
      handleInputChange(data);
    });
    const [ values ] = result.current;
    expect(values).toEqual({...initialForm, name: 'otherValue'});
  });

  test('should be reset form', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    const data = {
      target: {
        name: 'otherName',
        value: 'otherValue'
      }
    };
    const [ , handleInputChange, reset ] = result.current;
    act(() => {
      handleInputChange(data);
      reset()
    });
    const [ values ] = result.current;
    expect(values).toEqual(initialForm);
  })
  
})
