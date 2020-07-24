import React from 'react';
import { mount } from 'enzyme';
import Page from './Page';

describe('Page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Page />);
  });

  it('should have rendered', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
