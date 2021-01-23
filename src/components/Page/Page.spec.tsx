import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Page from './Page';

describe('Page', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<Page />);
  });

  it('should have rendered', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
