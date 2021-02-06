import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { userContext } from '../../../components/09-useContext/UserContext';


describe('Sui Test HomeScreen', () => {
  
  const user = {
    name: 'jesus',
    email: 'jesus@gmail.com'
  }
  const wrapper = shallow(
    <userContext.Provider value={{ 
      user
    }}>
      <HomeScreen />
    </userContext.Provider>
  )
  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
})
