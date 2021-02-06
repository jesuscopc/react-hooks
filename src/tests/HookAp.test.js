import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Sui Test HookApp', () => {
  
  test('Should be defiend', () => {
    const wrapper = shallow(<HookApp />)
    expect(wrapper).toMatchSnapshot();
  });
})
