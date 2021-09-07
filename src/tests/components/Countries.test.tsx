import React from 'react';
import { mount } from 'enzyme';
import Countries from 'pages/Countries';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

it('should render countries page', () => {
	const wrapper = mount(
		<MemoryRouter>
			<Provider store={store}>
				<Countries />
			</Provider>
		</MemoryRouter>
	);

  expect(wrapper.find('.countries').text()).toContain('SEARCH');
  expect(wrapper).toMatchSnapshot();
});

it('should set the search value on change event', () => {
	const wrapper = mount(
		<MemoryRouter>
			<Provider store={store}>
				<Countries />
			</Provider>
		</MemoryRouter>
	);

	wrapper.find('.search__input').simulate('change', {
    target: {
      value: 'Malta'
    },
  });
  
	expect(wrapper.find('.search__input').prop('value')).toEqual('Malta');
});

it('should search for countries when search button is clicked', () => {
  const wrapper = mount(
		<MemoryRouter>
			<Provider store={store}>
				<Countries />
			</Provider>
		</MemoryRouter>
  );

  wrapper.find('.search__input').simulate('change', {
    target: {
      value: 'Malta'
    },
  });
  
  wrapper.find('.search').find('button').simulate('click');
  
  expect(wrapper.find('.search__input').text()).toEqual('');
});
