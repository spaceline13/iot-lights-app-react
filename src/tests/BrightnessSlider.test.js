import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Main } from '../logic/Main';
import Bulb from '../logic/Bulb';
import BulbProperties from '../components/BulbProperties';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const model = new Main();
model.bulbs = [new Bulb(1, 'living room', 20, false), new Bulb(2, 'kitchen', 40, true)];
model.setSelectedBulb(model.bulbs[0]);

test('Slider Box', () => {
  const wrapper = shallow(<BulbProperties model={model} />);
  const percent = wrapper.find('[data-test="slider-percent"]');
  expect(percent.length).toBe(1);
  expect(percent.text()).toBe('20');
});
