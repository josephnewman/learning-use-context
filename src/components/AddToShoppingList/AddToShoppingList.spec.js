import React from 'react';
import * as allOfReact from 'react';
import { mount } from 'enzyme';
import AddToShoppingList from './AddToShoppingList';

describe('AddToShoppingList', () => {
  let wrapper;
  let setShoppingListMock;

  beforeEach(() => {
    setShoppingListMock = jest.fn();

    jest.spyOn(allOfReact, 'useContext').mockImplementation(() => [['hey', 'there'], setShoppingListMock]);

    wrapper = mount(<AddToShoppingList />);
  });

  it('should have rendered', () => {
    expect(wrapper.find('.add-to-shopping-list').exists()).toBe(true);
  });

  describe('when the form is submitted without text being input into the field', () => {
    beforeEach(() => {
      wrapper.find('.add-to-shopping-list-form').simulate('submit', { preventDefault: () => {} });
    });

    it('should NOT call the setShoppingListSpy', () => {
      expect(setShoppingListMock).toHaveBeenCalledTimes(0);
    });
  });

  describe('when text is input into the field', () => {
    beforeEach(() => {
      wrapper.find('.item-input').simulate('change', { target: { value: 'Hello' } });
    });

    describe('when the form is submitted', () => {
      beforeEach(() => {
        wrapper.find('.add-to-shopping-list-form').simulate('submit', { preventDefault: () => {} });
      });

      it('should call the setShoppingListSpy with updated array', () => {
        expect(setShoppingListMock).toHaveBeenCalledWith(['hey', 'there', 'Hello']);
      });

      it('should clear the input field', () => {
        expect(wrapper.find('.item-input').props().value).toBe('');
      });
    });
  });
});
