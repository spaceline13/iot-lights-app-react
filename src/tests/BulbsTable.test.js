import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Main } from '../logic/Main';
import Bulb from '../logic/Bulb';
import BulbsTable from '../components/BulbsTable';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const model = new Main();
model.bulbs = [new Bulb(1, 'living room', 20, false), new Bulb(2, 'kitchen', 40, true)];

test('Bulbs Table', () => {
  const wrapper = shallow(<BulbsTable model={model} />);
  const table = wrapper.find('[data-test="bulbs-table"]');
  expect(table.length).toBe(1);
});
