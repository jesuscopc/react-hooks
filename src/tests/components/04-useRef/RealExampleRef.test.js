import React from 'react'
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Suit Test <RealEXampleRef/>', () => {
  
  test('should be render correctly', () => {
    const wrapper = shallow(<RealExampleRef/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('should be show <MultipleCustomhooks />', () => {
    const wrapper = shallow(<RealExampleRef/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  }) 
  
});
