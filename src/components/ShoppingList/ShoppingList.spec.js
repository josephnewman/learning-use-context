import React from 'react';
import * as allOfReact from 'react';
import { mount } from 'enzyme';
import ShoppingList from './ShoppingList';

describe('ShoppingList', () => {
  let wrapper;

  beforeEach(() => {
    jest.spyOn(allOfReact, 'useContext').mockImplementation(() => [['hey', 'there'], jest.fn()]);

    wrapper = mount(<ShoppingList />);
  });

  it('should have rendered', () => {
    expect(wrapper.find('.shopping-list').exists()).toBe(true);
  });

  it('should contain two items in the list', () => {
    expect(wrapper.find('li').length).toBe(2);
  });

  it('should contain expected first list item', () => {
    expect(wrapper.find('li').at(0).text()).toBe('hey');
  });

  it('should contain expected second list item', () => {
    expect(wrapper.find('li').at(1).text()).toBe('there');
  });
});
