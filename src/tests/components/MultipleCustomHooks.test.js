import React from 'react'
import { shallow } from "enzyme";
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';
jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCouter');

describe('Sui test multiplecustom hooks', () => {
  useCouter.mockReturnValue(() => {
    counter: 10
    increment: () => {}
  });

  test('should be render correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();  
  });

  test('should be show info', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Jesus',
          quote: 'Hola mundo'
        }
      ],
      loading: false,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect( wrapper.find('.alert').exists() ).toBe( false );
    expect( wrapper.find('footer').text().trim() ).toBe( 'Jesus' );
  });
  
});
