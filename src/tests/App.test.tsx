import React from 'react';
import { shallow } from 'enzyme';
import Home from 'pages';

test('renders home page', () => {
  const wrapper = shallow(<Home />);

  expect(wrapper.find('.home').text()).toEqual('restcountries');
});
