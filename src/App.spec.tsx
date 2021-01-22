import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders basic app', () => {
    expect(wrapper.find('.app').exists()).toBe(true);
  });
});
