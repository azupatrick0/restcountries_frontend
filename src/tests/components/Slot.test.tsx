import React from 'react';
import { mount } from 'enzyme';
import Slot from 'pages/Slot';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

describe("Slot test suite", () => {
	it('should render slot page', () => {
		const wrapper = mount(
			<MemoryRouter>
				<Provider store={store}>
					<Slot />
				</Provider>
			</MemoryRouter>
		);

		expect(wrapper.find('.balance').find('div').at(0).text()).toContain('Balance');
		expect(wrapper).toMatchSnapshot();
	});

	it('should return spin result when spin button is clicked', async () => {
		const wrapper = mount(
			<MemoryRouter>
				<Provider store={store}>
					<Slot />
				</Provider>
			</MemoryRouter>
		);

    wrapper.find('.spin__button-view-button').at(1).simulate('click');

    expect(wrapper.find('.cards__layout').find('div').length).toBeGreaterThan(0);
    expect(Number(wrapper.find('.balance').find('.won').find('span').text())).toBeGreaterThanOrEqual(0);
	});
});
