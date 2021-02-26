import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('App renders and has the expected components', () => {
  const wrapper = shallow(<App />);
  const header = wrapper.find('[data-test="header"]');
  const navigation = wrapper.find('[data-test="navigation"]');
  const lighting = wrapper.find('[data-test="lighting-page"]');

  expect(header.length).toBe(1);
  expect(navigation.length).toBe(1);
  expect(lighting.length).toBe(1);
});
