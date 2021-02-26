import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import LightingPage from '../views/LightingPage';
import { Main } from '../logic/Main';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const model = new Main();

test('Lighting Page renders', () => {
  shallow(<LightingPage model={model} />);
});
